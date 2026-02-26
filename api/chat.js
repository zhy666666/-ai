export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { system, messages, max_tokens } = req.body;

    const openaiMessages = [];
    if (system) openaiMessages.push({ role: 'system', content: system });
    openaiMessages.push(...messages);

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: openaiMessages,
        max_tokens: max_tokens || 1000,
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || '暂时无法回应，请稍后再试。';
    res.status(200).json({ content: [{ type: 'text', text }] });

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
