import { Component } from '@angular/core';

type Cell = {
  mine: boolean;
  open: boolean;
  flagged: boolean;
  adjacent: number;
};

@Component({
  selector: 'app-minesweeper-app',
  standalone: true,
  template: `
    <div class="mine">
      <div class="hud">
        <div class="lcd">{{ mineCount }}</div>
        <button type="button" class="face" (click)="reset()">{{ face }}</button>
        <div class="lcd">{{ time }}</div>
      </div>
      <div class="board" [style.gridTemplateColumns]="'repeat(' + cols + ', 22px)'">
        @for (cell of cells; track i; let i = $index) {
          <button
            type="button"
            class="cell"
            [class.open]="cell.open"
            [class.mine]="cell.open && cell.mine"
            (click)="reveal(i)"
            (contextmenu)="flag($event, i)"
          >
            @if (cell.flagged && !cell.open) {
              🚩
            } @else if (cell.open && cell.mine) {
              💥
            } @else if (cell.open && cell.adjacent > 0) {
              <span [attr.data-n]="cell.adjacent">{{ cell.adjacent }}</span>
            }
          </button>
        }
      </div>
      <p class="tip">Left click dig · Right click flag</p>
    </div>
  `,
  styles: [
    `
      .mine {
        padding: 10px;
        background: #c0c0c0;
        font: 12px Tahoma, sans-serif;
        user-select: none;
      }
      .hud {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding: 6px;
        border: 2px solid;
        border-color: #808080 #fff #fff #808080;
      }
      .lcd {
        min-width: 42px;
        background: #000;
        color: #f00;
        font: 700 18px 'Courier New', monospace;
        padding: 2px 4px;
        text-align: center;
      }
      .face {
        width: 28px;
        height: 28px;
        border: 2px solid;
        border-color: #fff #808080 #808080 #fff;
        background: #c0c0c0;
        cursor: pointer;
        font-size: 16px;
      }
      .board {
        display: grid;
        gap: 0;
        width: fit-content;
        margin: 0 auto;
        border: 3px solid;
        border-color: #808080 #fff #fff #808080;
      }
      .cell {
        width: 22px;
        height: 22px;
        border: 2px solid;
        border-color: #fff #808080 #808080 #fff;
        background: #c0c0c0;
        padding: 0;
        font: 700 12px Tahoma, sans-serif;
        cursor: pointer;
      }
      .cell.open {
        border: 1px solid #808080;
        background: #bdbdbd;
      }
      .cell.mine {
        background: #e74c3c;
      }
      .cell span[data-n='1'] {
        color: #0000ff;
      }
      .cell span[data-n='2'] {
        color: #008000;
      }
      .cell span[data-n='3'] {
        color: #ff0000;
      }
      .cell span[data-n='4'] {
        color: #000080;
      }
      .tip {
        text-align: center;
        margin: 8px 0 0;
        color: #333;
      }
    `,
  ],
})
export class MinesweeperAppComponent {
  readonly cols = 9;
  readonly rows = 9;
  readonly mines = 10;
  cells: Cell[] = [];
  face = '🙂';
  time = 0;
  private timer: ReturnType<typeof setInterval> | null = null;
  private started = false;
  private alive = true;

  constructor() {
    this.reset();
  }

  get mineCount(): number {
    const flags = this.cells.filter((c) => c.flagged).length;
    return Math.max(0, this.mines - flags);
  }

  reset(): void {
    this.stopTimer();
    this.time = 0;
    this.started = false;
    this.alive = true;
    this.face = '🙂';
    this.cells = Array.from({ length: this.cols * this.rows }, () => ({
      mine: false,
      open: false,
      flagged: false,
      adjacent: 0,
    }));
  }

  reveal(index: number): void {
    if (!this.alive) return;
    const cell = this.cells[index];
    if (cell.open || cell.flagged) return;
    if (!this.started) {
      this.placeMines(index);
      this.startTimer();
      this.started = true;
    }
    if (cell.mine) {
      cell.open = true;
      this.face = '😵';
      this.alive = false;
      this.stopTimer();
      this.cells.forEach((c) => {
        if (c.mine) c.open = true;
      });
      return;
    }
    this.flood(index);
    if (this.cells.every((c) => c.mine || c.open)) {
      this.face = '😎';
      this.alive = false;
      this.stopTimer();
    }
  }

  flag(event: MouseEvent, index: number): void {
    event.preventDefault();
    if (!this.alive) return;
    const cell = this.cells[index];
    if (cell.open) return;
    cell.flagged = !cell.flagged;
  }

  private placeMines(safeIndex: number): void {
    let placed = 0;
    while (placed < this.mines) {
      const i = Math.floor(Math.random() * this.cells.length);
      if (i === safeIndex || this.cells[i].mine) continue;
      this.cells[i].mine = true;
      placed++;
    }
    this.cells.forEach((cell, i) => {
      if (cell.mine) return;
      cell.adjacent = this.neighbors(i).filter((n) => this.cells[n].mine).length;
    });
  }

  private flood(index: number): void {
    const stack = [index];
    while (stack.length) {
      const i = stack.pop()!;
      const cell = this.cells[i];
      if (cell.open || cell.flagged || cell.mine) continue;
      cell.open = true;
      if (cell.adjacent === 0) {
        stack.push(...this.neighbors(i));
      }
    }
  }

  private neighbors(index: number): number[] {
    const x = index % this.cols;
    const y = Math.floor(index / this.cols);
    const out: number[] = [];
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= this.cols || ny >= this.rows) continue;
        out.push(ny * this.cols + nx);
      }
    }
    return out;
  }

  private startTimer(): void {
    this.timer = setInterval(() => {
      this.time = Math.min(999, this.time + 1);
    }, 1000);
  }

  private stopTimer(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }
}
