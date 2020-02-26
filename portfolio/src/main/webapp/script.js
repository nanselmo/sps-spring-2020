// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */


function showRandomThoughtLeader() {
  const people_arr =
      ['Mekka Okereke', 'Seymour Papert', 'Karen Brennan', 'Robin DiAngelo', 'Janelle Monae', 'Hermione Grainger', 'Ray Salazar' ];
      
  //Get current person
  const personContainer = document.getElementById('person-container');
  const curPerson = personContainer.innerText;

  // Pick a random person that's not in the list
  var index = people_arr.indexOf(curPerson);
    if (index >= 0) {
        people_arr.splice( index, 1 );
    }
  const randomPerson = people_arr[Math.floor(Math.random() * people_arr.length)];

  // Add it to the page.
  
  personContainer.innerText = randomPerson;
}
