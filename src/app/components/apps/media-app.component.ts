import { Component } from '@angular/core';

@Component({
  selector: 'app-media-app',
  standalone: true,
  template: `
    <div class="media">
      <div class="screen">
        <div class="viz">
          @for (bar of bars; track i; let i = $index) {
            <span [style.animationDelay.ms]="i * 90"></span>
          }
        </div>
        <p class="now">Now Playing</p>
        <h3>{{ tracks[current].title }}</h3>
        <p class="artist">{{ tracks[current].artist }}</p>
      </div>
      <div class="controls">
        <button type="button" (click)="prev()">⏮</button>
        <button type="button" (click)="playing = !playing">{{ playing ? '⏸' : '▶' }}</button>
        <button type="button" (click)="next()">⏭</button>
      </div>
      <ul>
        @for (track of tracks; track track.title; let i = $index) {
          <li [class.active]="i === current" (click)="current = i; playing = true">
            {{ i + 1 }}. {{ track.title }}
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      .media {
        min-height: 100%;
        background: linear-gradient(180deg, #1b2838, #0f1720);
        color: #e8f0ff;
        font: 12px Tahoma, 'Segoe UI', sans-serif;
        padding: 12px;
      }
      .screen {
        background: radial-gradient(circle at top, #274864, #0b1220);
        border: 2px solid #3d5a73;
        border-radius: 4px;
        padding: 16px;
        text-align: center;
        margin-bottom: 10px;
      }
      .viz {
        display: flex;
        justify-content: center;
        align-items: end;
        gap: 3px;
        height: 48px;
        margin-bottom: 10px;
      }
      .viz span {
        width: 6px;
        height: 12px;
        background: #5dade2;
        animation: bounce 0.8s ease-in-out infinite alternate;
      }
      .now {
        margin: 0;
        color: #8fb4d4;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 10px;
      }
      h3 {
        margin: 4px 0;
        font: 700 16px 'Trebuchet MS', Tahoma, sans-serif;
      }
      .artist {
        margin: 0;
        color: #a8c4de;
      }
      .controls {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-bottom: 10px;
      }
      .controls button {
        border: 1px solid #5d7a94;
        background: linear-gradient(180deg, #3a536b, #243646);
        color: #fff;
        width: 40px;
        height: 28px;
        cursor: pointer;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        border: 1px solid #3d5a73;
        background: #132030;
      }
      li {
        padding: 6px 8px;
        border-bottom: 1px solid #243646;
        cursor: pointer;
      }
      li.active,
      li:hover {
        background: #215dc6;
      }
      @keyframes bounce {
        from {
          height: 8px;
        }
        to {
          height: 40px;
        }
      }
    `,
  ],
})
export class MediaAppComponent {
  readonly bars = Array.from({ length: 16 });
  readonly tracks = [
    { title: 'Compile Until Dawn', artist: 'Mehran feat. Coffee' },
    { title: 'Pull Request Serenade', artist: 'The Merge Conflicts' },
    { title: 'Assembly After Hours', artist: 'RISC-V Club' },
    { title: 'React Native Dreams', artist: 'Mobile Waves' },
    { title: 'Blue Screen Lullaby', artist: 'XP Orchestra' },
  ];
  current = 0;
  playing = true;

  prev(): void {
    this.current = (this.current - 1 + this.tracks.length) % this.tracks.length;
  }

  next(): void {
    this.current = (this.current + 1) % this.tracks.length;
  }
}
