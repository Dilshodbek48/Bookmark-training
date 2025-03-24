const elServicesButton = document.querySelectorAll('.services__button');
const elServicesContent = document.querySelectorAll('.services-content');

const elAskListButton = document.querySelectorAll('.ask-list-button');
if (elServicesButton.length > 0) {
  elServicesButton.forEach((tab, index) => {
    tab.addEventListener('click', function (evt) {
      evt.preventDefault();

      elServicesButton.forEach(tab => tab.classList.remove('services-button-active'));
      elServicesContent.forEach(content => content.classList.remove('services-content-active'));

      tab.classList.add('services-button-active');
      elServicesContent[index].classList.add('services-content-active');
    });
  });
};



elAskListButton.forEach((button) => {
  button.addEventListener('click', function () {
    const textElement = this.parentElement.querySelector('.ask-list__text');
    const iconDown = this.querySelector('.ask-list-button__icon');
    const iconUp = this.querySelector('.ask-list-button-icon-up');

    const isActive = textElement.classList.contains('ask-list-text-active');

    // Barcha ochilganlarni yopamiz
    document.querySelectorAll('.ask-list__text').forEach(el => el.classList.remove('ask-list-text-active'));
    document.querySelectorAll('.ask-list-button').forEach(btn => btn.classList.remove('ask-list-button-active'));

    if (!isActive) {
      textElement.classList.add('ask-list-text-active');
      this.classList.add('ask-list-button-active');
    }
  });
});
