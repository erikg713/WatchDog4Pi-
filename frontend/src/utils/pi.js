import Pi from 'pi-sdk';

export function authenticatePi(onSuccess, onError) {
  Pi.authenticate(['username', 'payments'], (user) => {
    onSuccess(user);
  }, (error) => {
    onError(error);
  });
}


export async function loginWithPi() {
  const scopes = ['username', 'payments'];
  const onIncompletePaymentFound = (payment) => {
    console.log('Incomplete payment found:', payment);
  };

  try {
    const user = await window.Pi.authenticate(scopes, onIncompletePaymentFound);
    console.log('Authenticated Pi user:', user);

    // Send user data to backend
    await fetch('http://localhost:5000/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pi_uid: user.uid,
        username: user.username
      })
    });

    localStorage.setItem('pi_user', JSON.stringify(user));
    window.location.href = '/dashboard';
  } catch (err) {
    console.error('Pi auth error:', err);
  }
}
// frontend/src/utils/pi.js

// Ensure Pi SDK is loaded in index.html or dynamically imported

let Pi; if (typeof window !== 'undefined') { Pi = window.Pi; }

const initPiLogin = async () => { if (!Pi) throw new Error('Pi SDK not found. Make sure it is loaded in your index.html');

return new Promise((resolve, reject) => { Pi.authenticate(['username'], (error, auth) => { if (error) { reject(error); } else { resolve(auth); } }); }); };

const getCurrentUser = () => { if (!Pi) return null; return Pi.getUser(); };

export { initPiLogin, getCurrentUser };

