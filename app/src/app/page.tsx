export function Card({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px', boxShadow: '2px 2px 8px #eee' }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '4px' }} />
      <h2 style={{
        color: '#334155',
        textAlign: 'center',
        fontSize: '1rem',
      }}>
        {title}
      </h2>
      <p style={{
        color: '#334155',
        textAlign: 'center',
        fontSize: '0.8rem',
      }}>
        {description}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      padding: '40px',
      fontFamily: 'Segoe UI, Arial, sans-serif',
    }}>
      <h1 style={{
        color: '#3730a3',
        textAlign: 'center',
        marginBottom: '32px',
        fontSize: '2.5rem',
        letterSpacing: '1px',
      }}>
        Bienvenido a mi página Next.js
      </h1>
      <p style={{
        color: '#334155',
        textAlign: 'center',
        marginBottom: '40px',
        fontSize: '1.2rem',
      }}>
        Este es un párrafo de ejemplo.
      </p>
      <div style={{
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <Card 
          title="Card 1"
          description="Descripción de la tarjeta 1."
          imageUrl="/mdp1.jpg" />
        <Card 
          title="Card 2"
          description="Descripción de la tarjeta 2."
          imageUrl="/mdp2.jpg" />
        <Card 
          title="Card 3"
          description="Descripción de la tarjeta 3."
          imageUrl="/mdp3.jpg" />
      </div>
    </main>
  );
}

