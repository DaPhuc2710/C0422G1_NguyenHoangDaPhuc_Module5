import {Injectable} from '@angular/core';
import {IWord} from '../model/i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: IWord[] = [
    {
      word: 'nostalgia',
      mean: 'a feeling of pleasure and also slight sadness when you think about things that happened in the past'
    },
    {
      word: 'psephology',
      mean: 'the study of elections and voting statistics (= numbers)'
    },
    {
      word: 'draconian',
      mean: 'Draconian laws, government actions, etc. are extremely severe, or go further than what is right or necessary'
    },
    {
      word: 'trisyllabic',
      mean: '(of a word) having three syllables'
    },
  ];

  constructor() {
  }

  findAll() {
    return this.dictionaries;
  }

  findByWord(word: string) {
    for (const val of this.dictionaries) {
      if (val.word === word) {
        return val;
      }
    }
  }
}
