document.getElementById('loveAppForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;

  const data = {
    intent: form.intent.value,
    relationship: form.relationship.value,
    features: Array.from(form.querySelectorAll('input[name="features"]:checked')).map(el => el.value),
    customization: form.customization.value,
    comfort: form.comfort.value,
    visibility: form.visibility.value,
    expression: form.expression.value,
    usage: form.usage.value,
    wish: form.wish.value,
    recommend: form.recommend.value,
    pay: form.pay.value
  };

  const res = await fetch('/api/love-feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert('Thank you for sharing your thoughts! 💘');
    form.reset();
  }
});