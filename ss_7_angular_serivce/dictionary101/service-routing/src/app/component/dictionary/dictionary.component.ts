import {Component, OnInit} from '@angular/core';
import {IWord} from '../../model/i-word';
import {DictionaryService} from '../../service/dictionary.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionaries: IWord[];

  constructor(private dictionaryService: DictionaryService, private router: Router) {
    this.dictionaries = dictionaryService.findAll();
  }
  ngOnInit(): void {
  }

}
