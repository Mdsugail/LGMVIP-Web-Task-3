const form = document.getElementById('registrationForm');
    const dataContainer = document.getElementById('registeredData');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = form.elements['name'].value;
      const email = form.elements['email'].value;
      const college = form.elements['college'].value;
      const gender = form.elements['gender'].value;
      const degree = form.elements['degree'].value;

      const registrationData = document.createElement('div');
      registrationData.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>College: ${college}</p>
        <p>Gender: ${gender}</p>
        <p>Degree: ${degree}</p>
      `;

      dataContainer.appendChild(registrationData);

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('college').value = '';
      document.getElementById('gender').value = '';
      document.getElementById('degree').value = '';

    });
