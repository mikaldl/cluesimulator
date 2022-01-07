<template>
  <div class="flex-col flex justify-center" style="font-family: Open Sans, sans-serif;">
    <canvas ref="canvas" :width="width" :height="height"/>
  </div>
</template>

<script>
  import {map, find} from "lodash";

  export default {
    props: ['type', 'items', 'table', 'numerator', 'denominator'],

    data() {
      let globalPadding = 8,
        imageSize = 24;

      return {
        width: 1275,
        globalPadding: globalPadding,
        imageSize: imageSize,
        height: this.table.length * (imageSize + (3 * globalPadding + 2) + 7.5),
        textSize: 14,
        rectWidth: 295,
        c: null,
        ctx: null
      }
    },

    static() {
      return {
          currentLuck: 0
      }
    },

    mounted() {
      this.c = this.$refs['canvas'];
      this.ctx = this.c.getContext('2d');

      this.resetSize();
      this.resetFont();
      this.drawTitle();
      this.drawItems();
    },

    watch: {
      width() {
        this.resetSize()
      },
      height() {
        this.resetSize()
      }
    },

    methods: {
      resetSize() {
        this.c.style.width = this.width;
        this.c.style.height = this.height
        this.c.width = this.c.getBoundingClientRect().width;
        this.c.height = this.c.getBoundingClientRect().height;
      },

      resetFont() {
        this.ctx.font = this.textSize + 'px Open Sans';
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top'; // important!
      },

      drawTitle() {
        this.ctx.font = '400 24px Open Sans';
        this.ctx.fillText('Clue droptable: ' + this.type, 10, 8);
        this.resetFont();
        this.ctx.fillText('Rare droptable: ' + this.numerator + "/" + this.denominator, 10, 32)
      },

      drawItem(item, initialHeight, initialWidth, globalPadding, imageSize, extraText, luck) {
        let itemObj = find(this.items, {name: item})
        if (itemObj) {
          let itemImg = new Image;
          let height = initialHeight, width = initialWidth
          itemImg.onload = () => {
            this.ctx.drawImage(itemImg, width + globalPadding, height + globalPadding, imageSize, imageSize)
          }
          itemImg.src = 'http://services.runescape.com/m=itemdb_rs/obj_sprite.gif?id=' + itemObj.id;
        }
        this.ctx.fillText((extraText ? (extraText + " ") : "") + item + (itemObj ? (" (1/" + parseInt(Math.floor(1/this.currentLuck)) + ")") : ''), initialWidth + (globalPadding * 2) + imageSize, initialHeight + globalPadding + (imageSize / 4 + 1));
      },

      drawBranch(x, y, item, tableWidth, tableHeight, type, odds) {
        if (item && !item.custom) {
          // Draw 8px line
          this.ctx.moveTo(x + 35 + (this.globalPadding * 2) + this.imageSize, y - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1));
          this.ctx.lineTo(x + 35 + (this.globalPadding * 2) + this.imageSize + 8, y - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1));

          if (typeof item === 'object') {
            // Draw vertical line
            tableHeight += this.imageSize * (Array.isArray(item) ? (item.length - 1) : 0)
            tableWidth += 16 + this.globalPadding / 2
            this.ctx.lineTo(x + 35 + (this.globalPadding * 2) + this.imageSize + 8, y + (item.hit && Array.isArray(item.hit) ? ((item.hit.length - 1) * this.imageSize) : 0) - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1) + (this.imageSize * ((Array.isArray(item) ? (item.length - 1) : 1))));
            this.ctx.stroke();

            if (Array.isArray(item)) {
              this.drawItem('', y - this.imageSize + this.textSize, x - 5, this.globalPadding, this.imageSize, type === 'miss' ? "Miss" : odds)
              map(item, (missItem, i) => {
                this.ctx.moveTo(x + 35 + (this.globalPadding * 2) + this.imageSize + 8, y - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1) + (i * this.imageSize));
                this.ctx.lineTo(x + 35 + (this.globalPadding * 2) + this.imageSize + 16, y - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1) + (i * this.imageSize));
                this.ctx.stroke();

                this.drawItem(missItem, y - this.imageSize + this.textSize + (i * this.imageSize), x + 35 + (this.globalPadding * 2) + this.imageSize + 16, this.globalPadding, this.imageSize)
              })
            } else {
              this.ctx.moveTo(x + 35 + (this.globalPadding * 2) + this.imageSize + 8, y - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1));
              this.ctx.lineTo(x + 35 + (this.globalPadding * 2) + this.imageSize + 16, y - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1));
              this.ctx.stroke();
              this.ctx.moveTo(x + 35 + (this.globalPadding * 2) + this.imageSize + 8, y + (item.hit && Array.isArray(item.hit) ? ((item.hit.length - 1) * this.imageSize) : 0) - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1) + (this.imageSize));
              this.ctx.lineTo(x + (typeof item.miss === 'string' || item.miss.custom ? 35 : 65) + (this.globalPadding * 2) + this.imageSize + 16, y + (item.hit && Array.isArray(item.hit) ? ((item.hit.length - 1) * this.imageSize) : 0) - this.imageSize + this.textSize + (this.textSize / 2) + this.globalPadding + (this.imageSize / 4 + 1) + (this.imageSize));
              this.ctx.stroke();
            }
          }
        }

        return [tableWidth, tableHeight]
      },

      drawMissRoll(item, x, y, tableHeight, tableWidth) {
        if (item) {
          if (typeof item.hit === 'string') {
              let oldLuck = this.currentLuck
              this.currentLuck = this.currentLuck * (item.numerator / item.denominator);
              this.drawItem(item.hit, y - (2 * this.imageSize) + this.textSize, x, this.globalPadding, this.imageSize, "(" + item.numerator + "/" + item.denominator + ")")
              this.currentLuck = oldLuck
          } else {
            let oldLuck = this.currentLuck
            this.currentLuck = this.currentLuck * (item.numerator / item.denominator) * (1 / item.hit.length);
            [tableWidth, tableHeight] = this.drawBranch(x - 30, y - this.imageSize, item.hit, tableWidth, tableHeight, 'hit', item.numerator + "/" + item.denominator)
            this.currentLuck = oldLuck
            tableWidth += 70
            y += ((item.hit.length - 1) * this.imageSize)
          }

          if (typeof item.miss === 'string' || item.miss.custom) {
            let oldLuck = this.currentLuck
            this.currentLuck = this.currentLuck * ((item.denominator - item.numerator) / item.denominator);
            this.drawItem(item.miss.custom ? item.miss.hit : item.miss, y - this.imageSize + this.textSize, x, this.globalPadding, this.imageSize, "Miss:")
            this.currentLuck = oldLuck
          } else {
            if (Array.isArray(item.miss)) {
                this.currentLuck = this.currentLuck * ((item.denominator - item.numerator) / item.denominator) * (1 / item.miss.length)
            }

            [tableWidth, tableHeight] = this.drawBranch(x, y, item.miss, tableWidth, tableHeight, 'miss')

            if (typeof item.miss !== 'string' && !Array.isArray(item.miss)) {
              // is Object
              if (!item.custom) {
                this.drawItem('', y - this.imageSize + this.textSize, x, this.globalPadding, this.imageSize, "Miss")

                tableWidth += 70
                if(tableWidth > 540) {
                  tableWidth = 540;
                }
                x += 90
                tableHeight += this.imageSize
                y += this.imageSize

                if(!item.same) {
                    this.currentLuck = this.currentLuck * ((item.denominator - item.numerator) / item.denominator);
                }
                let response = this.drawMissRoll(item.miss, x, y, tableHeight, tableWidth);

                tableWidth = response[1];
                tableHeight = response[0];
              }
            }
          }
        }

        return [tableHeight, tableWidth, x, y]
      },

      drawItems() {
        let initialHeight = 100;
        let initialWidth = 10;
        let imageSize = this.imageSize;
        let globalPadding = this.globalPadding;
        let rectWidth = this.rectWidth;
        let columnPadding = 125;
        let objNr = 0;
        let tableHeightTotal = 0;

        this.ctx.font = "400 18px Open Sans";
        this.ctx.fillText('1/' + this.table.length, initialWidth, initialHeight - (3 * globalPadding))
        this.resetFont();

        map(this.table, item => {
          this.ctx.beginPath();
          this.ctx.lineWidth = "1";
          this.ctx.strokeStyle = "#fff";

          this.currentLuck = this.numerator / this.denominator;
          this.currentLuck = this.currentLuck * (1 / this.table.length)

          if (typeof item === 'string') {
            this.ctx.rect(initialWidth + .5, initialHeight + .5, rectWidth, (globalPadding * 2) + imageSize);

            this.drawItem(item, initialHeight, initialWidth, globalPadding, imageSize)
            initialHeight = initialHeight + imageSize + (globalPadding * 3) + 2
          } else if (Array.isArray(item)) {
            let size = item.length
            this.ctx.rect(initialWidth + .5, initialHeight + .5, rectWidth, (globalPadding * 2) + (size * imageSize));

            this.currentLuck = this.currentLuck * (1 / item.length)
            map(item, (it, i) => {
              this.drawItem(it, initialHeight + (i * imageSize), initialWidth, globalPadding, imageSize)
            })

            initialHeight = initialHeight + (size * imageSize) + (globalPadding * 3) + 2
          } else if (typeof item === 'object') {
            this.ctx.fillStyle = 'rgba(255,215,0,.75)'
            this.ctx.fillRect(initialWidth + .5, initialHeight + .5, rectWidth, (globalPadding * 2) + imageSize);
            this.ctx.rect(initialWidth + .5, initialHeight + .5, rectWidth, (globalPadding * 2) + imageSize);
            this.resetFont();
            this.ctx.font = '500 18px Open Sans';
            this.drawItem(item.name, initialHeight - 2, initialWidth - 32, globalPadding, imageSize)
            this.resetFont();

            let startHeight = initialHeight + .5 + (((globalPadding * 2) + imageSize) / 2)
            let startWidth = initialWidth + .5 + rectWidth
            let endHeight = columnPadding + 0.5 + (objNr * (globalPadding + (globalPadding * 2) + (3 * imageSize)) + tableHeightTotal)

            this.ctx.moveTo(startWidth, startHeight);

            let firstLine = startWidth + (columnPadding / 4 * 2);
            let endLine = firstLine + (columnPadding / 4 * 2);

            let tableHeight = 0;
            let tableWidth = 0;

            [tableHeight, tableWidth] = this.drawMissRoll(item, endLine, endHeight, tableHeight, tableWidth)

            this.ctx.stroke();
            this.ctx.moveTo(startWidth, startHeight);
            this.ctx.lineTo(firstLine, startHeight);
            this.ctx.lineTo(firstLine, endHeight + (tableHeight / 2));
            this.ctx.lineTo(endLine, endHeight + (tableHeight / 2))
            this.ctx.rect(endLine, endHeight - (((globalPadding * 2) + (2 * imageSize)) / 2), rectWidth + tableWidth, (globalPadding * 2) + (2 * imageSize) + tableHeight);

            tableHeightTotal += tableHeight
            initialHeight = initialHeight + imageSize + (globalPadding * 3) + 2
            objNr++;
          }

          this.ctx.stroke();
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
