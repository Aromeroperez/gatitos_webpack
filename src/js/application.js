import $ from './jquery-2.1.0.min.js';

var names = ['Tiger', 'Samuel', 'Leeloo',
             'Bella', 'Mo', 'Sly',
             'Beezy', 'Maple', 'Rodney',
             'Yonce', 'Reginald', 'Winifred',
             'Andreu', 'Jose', 'Kiko',
             'Davids'];
var ages  = ['9 Weeks', '12 Weeks', '3 Months',
             '8 Weeks', '1 Year', '15 Weeks',
             '4 Months', '2 Months', '14 Weeks',
             '6 Months', '10 Weeks', '8 Months',
             '3 Months', '5 Weeks', '5 Months',
             '15 Weeks'];
var vaccines = ['Vacunas: 5', 'Vacunas: 2', 'Vacunas: 6',
             'Vacunas: 3', 'Vacunas: 1', 'Vacunas: 6',
             'Vacunas: 7', 'Vacunas: 8', 'Vacunas: 3',
             'Vacunas: 0', 'Vacunas: 1', 'Vacunas: 52'];
$('.kittens').find('li').each( function(i, el) {
  var img = $(el).find('img');
  var name = $(el).find('.name');
  var age = $(el).find('.age');
  var vaccine = $(el).find('.vaccine'); 

  var w = 250;
  var h = 250;

  img.attr('src', 'http://placekitten.com/'+w+'/'+h+'?image='+i);
  name.text(names[i]);
  age.text(ages[i]);
  vaccine.text(vaccines[i]);
});
