document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (isNaN(birthDate.getTime()) || birthDate > currentDate) {
        alert('Please enter a valid date.');
        return;
    }

    const age = calculateAge(birthDate, currentDate);

    document.getElementById('years').textContent = age.years;
    document.getElementById('months').textContent = age.months;
    document.getElementById('days').textContent = age.days;
});

function calculateAge(birthDate, currentDate) {
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (isNaN(birthDate.getTime()) || birthDate > currentDate) {
        alert('Please enter a valid date.');
        return;
    }

    const age = calculateAge(birthDate, currentDate);

    animateValue('years', 0, age.years, 1000);
    animateValue('months', 0, age.months, 1000);
    animateValue('days', 0, age.days, 1000);
});
