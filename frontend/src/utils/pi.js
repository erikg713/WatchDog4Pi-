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
