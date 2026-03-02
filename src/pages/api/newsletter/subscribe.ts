import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email richiesta.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Servizio newsletter non configurato.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://api.buttondown.com/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ message: 'Iscrizione completata!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();

    if (response.status === 409) {
      return new Response(
        JSON.stringify({ message: 'Sei già iscritto!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: data.detail || 'Errore durante l\'iscrizione.' }),
      { status: response.status, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: 'Errore del server.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
