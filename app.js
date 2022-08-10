// https://calculator.swiftutors.com/enthalpy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const enthalpyRadio = document.getElementById('enthalpyRadio');
const internalEnergyRadio = document.getElementById('internalEnergyRadio');
const pressureRadio = document.getElementById('pressureRadio');
const volumeRadio = document.getElementById('volumeRadio');

let enthalpy;
let internalEnergy = v1;
let pressure = v2;
let volume = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

enthalpyRadio.addEventListener('click', function() {
  variable1.textContent = '(U) Internal Energy (J)';
  variable2.textContent = '(P) Pressure (Pa)';
  variable3.textContent = '(V) Volume (m³)';
  internalEnergy = v1;
  pressure = v2;
  volume = v3;
  result.textContent = '';
});

internalEnergyRadio.addEventListener('click', function() {
  variable1.textContent = 'Enthalpy';
  variable2.textContent = '(P) Pressure (Pa)';
  variable3.textContent = '(V) Volume (m³)';
  enthalpy = v1;
  pressure = v2;
  volume = v3;
  result.textContent = '';
});

pressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Enthalpy';
  variable2.textContent = '(U) Internal Energy (J)';
  variable3.textContent = '(V) Volume (m³)';
  enthalpy = v1;
  internalEnergy = v2;
  volume = v3;
  result.textContent = '';
});

volumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Enthalpy';
  variable2.textContent = '(U) Internal Energy (J)';
  variable3.textContent = '(P) Pressure (Pa)';
  enthalpy = v1;
  internalEnergy = v2;
  pressure = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(enthalpyRadio.checked)
    result.textContent = `Enthalpy = ${computeEnthalpy().toFixed(2)}`;

  else if(internalEnergyRadio.checked)
    result.textContent = `Internal Energy = ${computeInternalEnergy().toFixed(2)} J`;

  else if(pressureRadio.checked)
    result.textContent = `Pressure = ${computePressure().toFixed(2)} Pa`;

  else if(volumeRadio.checked)
    result.textContent = `Volume = ${computeVolume().toFixed(2)} m³`;
})

// calculation

function computeEnthalpy() {
  return Number(internalEnergy.value) + (Number(pressure.value) * Number(volume.value));
}

function computeInternalEnergy() {
  return Number(enthalpy.value) - (Number(pressure.value) * Number(volume.value));
}

function computePressure() {
  return (Number(enthalpy.value) - Number(internalEnergy.value)) / Number(volume.value);
}

function computeVolume() {
  return (Number(enthalpy.value) - Number(internalEnergy.value)) / Number(pressure.value);
}