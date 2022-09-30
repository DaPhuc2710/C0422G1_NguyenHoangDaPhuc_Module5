import {Component, Input, OnInit} from '@angular/core';
import {IWord} from '../../model/i-word';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailWord: IWord;

  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const word = paraMap.get('word');
      if (word != null) {
        this.detailWord = dictionaryService.findByWord(word);
      }
    });

  }

  ngOnInit(): void {
  }

}
