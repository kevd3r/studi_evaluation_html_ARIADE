$(document).ready(() => {
  console.log('jQuery est prêt à l\'utilisation'),
  $('.dropdown-toggle').dropdown()
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
});