import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  constructor(
    private dialog: Dialog,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.router.navigateByUrl(`${this.route.snapshot.url[0]}`);

    this.dialog.open(this.route.snapshot.data['dialog']);
  }
}
