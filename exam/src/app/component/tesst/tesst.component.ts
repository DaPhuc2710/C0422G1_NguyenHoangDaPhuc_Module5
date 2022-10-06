import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tesst',
  templateUrl: './tesst.component.html',
  styleUrls: ['./tesst.component.css']
})
export class TesstComponent implements OnInit {

  constructor(private toast: ToastrService) {
  }

  ngOnInit() {
  }

  toart() {
    this.toast.success('thu ti thoi', 'hello');
  }
}
