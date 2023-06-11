"use strict"

function checkDocuments() {
  return new Promise((resolve, reject) => {
    const passportFile = document.querySelector('.passport').files[0];
    const skanPassportFile = document.querySelector('.skan__passport').files[0];
    const uaPassportFile = document.querySelector('.ua__passport').files[0];
    const marriageCertificateFile = document.querySelector('.marriage__certificate').files[0];
    const certificateChildrenFile = document.querySelector('.certificate__children').files[0];
    const statementBankFile = document.querySelector('.statement__bank').files[0];

    if (passportFile && skanPassportFile && uaPassportFile && marriageCertificateFile && certificateChildrenFile && statementBankFile) {
      resolve('Документи заповнені коректно');
    } else {
      reject('Відмова в поданні на візу в Канаду');
    }
  });
}

const form = document.getElementById('add-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkDocuments()
    .then((result) => {
      console.log(result);
      // Відправка форми або виконання інших дій
      form.submit();
    })
    .catch((error) => {
      console.error(error);
      // Показати повідомлення про помилку або відмову
    });
});