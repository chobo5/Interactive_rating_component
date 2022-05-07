const scores = document.querySelectorAll('.scores button');
const SELECTED = 'selected';

function mouseClickScore(score) {
    if (score.target.classList.contains(SELECTED)) {
        score.target.classList.remove(SELECTED);
    }else {
        scores.forEach(score => score.classList.remove(SELECTED));
        score.target.classList.add(SELECTED);
        let selectedScore = score.target.innerText;
        let whatScore = document.querySelector('.show_score');
        whatScore.innerText = `You selected ${selectedScore} out of 5`;
    }

}

scores.forEach(score => {score.addEventListener('click', mouseClickScore)});

const submit = document.querySelector('.submit button');
const pageFirst = document.querySelector('.page_first'); 
const pageSecond = document.querySelector('.page_second');

function clickSubmit() {
    pageFirst.classList.add('hidden');
    pageSecond.classList.remove('hidden');
}

submit.addEventListener('click', clickSubmit);