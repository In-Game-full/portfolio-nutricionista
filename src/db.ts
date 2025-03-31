import { createClient } from '@libsql/client';

// Criar cliente SQLite
export const db = createClient({
  url: 'file:local.db',
});

// Inicializar banco de dados
export async function initDB() {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS avaliacoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        whatsapp INT2 NOT NULL,
        objetivo_principal TEXT NOT NULL,
        possui_doenca TEXT NOT NULL,
        historico_familiar TEXT NOT NULL,
        usa_medicamento TEXT NOT NULL
        alergia_intolerancia_alimentar TEXT NOT NULL
        dificuldade_objetivo TEXT NOT NULL
      )
    `);
    console.log('Banco de dados inicializado com sucesso');
  } catch (error) {
    console.error('Erro ao inicializar banco de dados:', error);
  }
}