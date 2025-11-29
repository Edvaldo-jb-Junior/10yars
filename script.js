 const slides = document.querySelectorAll('.carousel img');
    const thumbs = document.querySelectorAll('.thumbs img');
    let index = 0;

    function showSlide(i){
      slides.forEach(s => s.classList.remove('active'));
      thumbs.forEach(t => t.classList.remove('selected'));
      slides[i].classList.add('active');
      thumbs[i].classList.add('selected');
      index = i;
    }

    function next(){ showSlide((index + 1) % slides.length); }
    function prev(){ showSlide((index - 1 + slides.length) % slides.length); }
    function goToSlide(i){ showSlide(i); }

    document.getElementById('next').onclick = next;
    document.getElementById('prev').onclick = prev;