import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { OpenWindow } from '../../models/window.types';
import { XpIconComponent } from '../xp-icon/xp-icon.component';

@Component({
  selector: 'app-xp-window',
  standalone: true,
  imports: [XpIconComponent],
  templateUrl: './xp-window.component.html',
  styleUrl: './xp-window.component.css',
})
export class XpWindowComponent {
  @Input({ required: true }) win!: OpenWindow;
  @Input() focused = false;
  @Output() focus = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  @Output() minimize = new EventEmitter<void>();
  @Output() maximize = new EventEmitter<void>();
  @Output() move = new EventEmitter<{ x: number; y: number }>();

  private dragging = false;
  private originX = 0;
  private originY = 0;
  private startX = 0;
  private startY = 0;

  onTitleDown(event: PointerEvent): void {
    if (this.win.maximized) return;
    const target = event.target as HTMLElement;
    if (target.closest('.win-controls')) return;
    this.dragging = true;
    this.originX = this.win.x;
    this.originY = this.win.y;
    this.startX = event.clientX;
    this.startY = event.clientY;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    this.focus.emit();
  }

  onTitleMove(event: PointerEvent): void {
    if (!this.dragging) return;
    this.move.emit({
      x: this.originX + (event.clientX - this.startX),
      y: this.originY + (event.clientY - this.startY),
    });
  }

  onTitleUp(): void {
    this.dragging = false;
  }

  @HostListener('mousedown')
  onMouseDown(): void {
    this.focus.emit();
  }
}
