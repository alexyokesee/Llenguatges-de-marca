document.addEventListener('DOMContentLoaded', function() { // Espera a que el document estigui carregat
    const addButton = document.getElementById('afegirElement'); // Obtenim el botó d'afegir
    const list = document.getElementById('llistaElements'); // A continuació, amb el const list obtenim la llista

    addButton.addEventListener('click', function() { // Afegim un event listener al botó d'afegir
        const textInput = document.getElementById('textElement'); //Seguidament, amb el const textInput obtenim el text introduït
        const text = textInput.value.trim(); //I aquest const, text, guarda el text introduït sense espais


        if (text !== '') { //Aquesta condidció fa jun "if" en la qual si el text no està buit, es crea un nou element de la llista
            const listItem = document.createElement('li'); //Amb el const listItem creem un nou element de la llista

            const span = document.createElement('span'); //Amb el const span creem un nou element de tipus span
            span.className = 'editable'; //A continuació, li afegim la classe editable
            span.textContent = text; //I li afegim el text introduït a l'element span creat

           
            span.addEventListener('click', function() {
                span.style.color = span.style.color === 'red' ? 'blue' : 'red'; //Si el color del text és vermell, el canvia a negre i viceversa
            });

            const editInput = document.createElement('input'); //Amb el const editInput creem un nou element de tipus input
            editInput.type = 'text';
            editInput.className = 'editInput'; //A continuació, li afegim la classe editInput
            editInput.style.display = 'none'; // El text editable s’ha de mostrar només quan s’activi l’edició en línia.

            const editButton = document.createElement('button'); //Amb el const editButton creem un nou element de tipus button
            editButton.className = 'editar'; //A continuació, li afegim la classe editar
            editButton.textContent = 'Editar'; //I li afegim el text "Editar"
        
            editButton.addEventListener('click', function() { //Seguidament, li afegim un event listener al botó d'editar
                if (editInput.style.display === 'none') { //Aquesta condició fa un "if" en la qual si l'element editInput no està visible, es mostra
                    editInput.value = span.textContent; //El valor de l'element editInput és el text de l'element span
                    span.style.display = 'none';
                    editInput.style.display = 'inline';
                    editButton.textContent = 'Guardar'; //I el text del botó canvia a "Guardar"
                } else {
                    const newText = editInput.value.trim(); //Aquest const guarda el nou text introduït sense espais
                  
                    if (newText !== '') {
                        span.textContent = newText; //El text de l'element span es canvia pel nou text introduït
                        span.style.display = 'inline'; //L'element span es mostra
                        editInput.style.display = 'none'; //I l'element editInput es torna a amagar
                        editButton.textContent = 'Editar'; //I el text del botó torna a ser "Editar"
                    } else {
                        alert('El text no pot estar buit.'); //Si el text està buit, es mostra un alert
                    }
                }
            });

            const deleteButton = document.createElement('button'); //Amb el const deleteButton creem un nou element de tipus button
            deleteButton.className = 'eliminar'; //A continuació, li afegim la classe eliminar
            deleteButton.textContent = 'Eliminar'; //A continuació, li afegim la classe eliminar i el text "Eliminar"
         
            deleteButton.addEventListener('click', function() { //Seguidament, li afegim un event listener al botó d'eliminar
                listItem.remove();
            });

            listItem.appendChild(span); //A continuació, afegim els elements creats a l'element listItem
            listItem.appendChild(editInput);
            listItem.appendChild(editButton); //I afegeix el botó d'editar
            listItem.appendChild(deleteButton);
            list.appendChild(listItem);
            

            textInput.value = '';
        } else {
            alert('El text no pot estar buit.');
        }
    });
});
