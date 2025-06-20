
        document.getElementById('bmiForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const weight = parseFloat(document.getElementById('weight').value);
            const heightCm = parseFloat(document.getElementById('height').value);
            if (weight > 0 && heightCm > 0) {
                const heightM = heightCm / 100;
                const bmi = weight / (heightM * heightM);
                let category = '';
                if (bmi < 18.5) category = 'Underweight';
                else if (bmi < 24.9) category = 'Normal weight';
                else if (bmi < 29.9) category = 'Overweight';
                else category = 'Obesity';
                document.getElementById('result').innerHTML = 
                    `Your BMI is <strong>${bmi.toFixed(2)}</strong> (${category})`;
            } else {
                document.getElementById('result').textContent = 'Please enter valid values.';
            }
        });
