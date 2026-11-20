// Load the verified WebXR build and replace the loading state if it cannot start.
try {
  await import('./build/app.js');
  delete document.body.dataset.startup;
} catch (error) {
  document.body.dataset.startup = 'failed';
  document.getElementById('mode').textContent = 'The 3D scene could not start in this browser.';
  document.getElementById('startup-fallback').hidden = false;
  console.error('FAULTLINE startup failed', error);
}
