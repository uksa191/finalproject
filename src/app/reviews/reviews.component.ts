import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const Reviews = [
{
name: 'Petro',
address: 'petro@gmail.com',
comment: 'Пять столетий спустя Lorem Ipsum испытал всплеск популярности с выпуском сухого переноса листов Letraset в. Эти листы надписи можно потереть на любом месте и были быстро приняты художники-графики, принтеры, архитекторов и рекламодателей для их профессионального вида и простоты использования. Letraset включены Lorem Ipsum проходы в арсеналом шрифтов, стилей и размеров, затвердевание место Латинского-эск фразу целиком в печатной и графической индустрии. Те, с вниманием к деталям будет даже поймали дань классического текста в эпизоде Mad Men (S6E1 вокруг 1:18:55 для тех, кто не сделал).'
},
{
name: 'Oleg',
address: 'oleg@ukr.net',
comment: 'ed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
}
]
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['..//app.component.css']
})
export class ReviewsComponent implements OnInit{
reviews = Reviews;

form = this.fb.group({
  name: ['', Validators.required],
  address: ['', Validators.required],
  comment: ['', Validators.required],
})

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit(){
    Reviews.push(this.form.value);
  }

 }


