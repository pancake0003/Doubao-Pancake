'use client';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = () => {
    if (message.trim() === '') return;
    setResponse(`You said: ${message}`);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Doubao Chatbot (Test Mode)</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded w-64"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
      {response && (
        <div className="mt-6 bg-gray-100 text-black p-4 rounded w-80 text-center">
          {response}
        </div>
      )}
    </main>
  );
}