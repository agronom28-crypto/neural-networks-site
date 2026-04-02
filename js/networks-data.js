const NETWORKS = [
  {
    name: 'GPT-4o',
    company: 'OpenAI',
    icon: '🤖',
    category: 'llm',
    desc: 'Мощная мультимодальная языковая модель. Понимает текст, изображения и аудио. Используется в ChatGPT.',
    url: 'https://openai.com/gpt-4o'
  },
  {
    name: 'Claude 3.5',
    company: 'Anthropic',
    icon: '🧬',
    category: 'llm',
    desc: 'Безопасная и мощная LLM от Anthropic. Отличается длинным контекстом и глубоким анализом текста.',
    url: 'https://anthropic.com/claude'
  },
  {
    name: 'Gemini 2.0',
    company: 'Google DeepMind',
    icon: '💎',
    category: 'llm',
    desc: 'Флагманская мультимодальная модель Google. Интегрирована в поиск, Workspace и Android.',
    url: 'https://deepmind.google/gemini'
  },
  {
    name: 'LLaMA 3',
    company: 'Meta AI',
    icon: '🦙',
    category: 'llm',
    desc: 'Открытая языковая модель от Meta. Доступна для локального запуска и fine-tuning.',
    url: 'https://ai.meta.com/llama'
  },
  {
    name: 'Mistral Large',
    company: 'Mistral AI',
    icon: '🌪️',
    category: 'llm',
    desc: 'Европейская открытая LLM с высокой эффективностью. Популярна в enterprise-решениях.',
    url: 'https://mistral.ai'
  },
  {
    name: 'DALL-E 3',
    company: 'OpenAI',
    icon: '🎨',
    category: 'image',
    desc: 'Генерация реалистичных и художественных изображений по текстовому описанию.',
    url: 'https://openai.com/dall-e-3'
  },
  {
    name: 'Midjourney v6',
    company: 'Midjourney',
    icon: '🖼️',
    category: 'image',
    desc: 'Лучшая художественная нейросеть для генерации изображений. Работает через Discord.',
    url: 'https://midjourney.com'
  },
  {
    name: 'Stable Diffusion 3',
    company: 'Stability AI',
    icon: '🌈',
    category: 'image',
    desc: 'Открытая диффузионная модель для генерации изображений. Запускается локально.',
    url: 'https://stability.ai'
  },
  {
    name: 'Flux',
    company: 'Black Forest Labs',
    icon: '⚡',
    category: 'image',
    desc: 'Современная модель генерации изображений с высоким качеством деталей и реализма.',
    url: 'https://blackforestlabs.ai'
  },
  {
    name: 'Whisper',
    company: 'OpenAI',
    icon: '🎙️',
    category: 'audio',
    desc: 'Модель распознавания речи с поддержкой 100+ языков. Open source, работает офлайн.',
    url: 'https://openai.com/research/whisper'
  },
  {
    name: 'ElevenLabs',
    company: 'ElevenLabs',
    icon: '🔊',
    category: 'audio',
    desc: 'Синтез и клонирование голоса. Генерирует реалистичную речь на 30+ языках.',
    url: 'https://elevenlabs.io'
  },
  {
    name: 'MusicGen',
    company: 'Meta AI',
    icon: '🎵',
    category: 'audio',
    desc: 'Генерация музыки по текстовому описанию. Открытая модель от Meta Research.',
    url: 'https://audiocraft.metademolab.com'
  },
  {
    name: 'Sora',
    company: 'OpenAI',
    icon: '🎬',
    category: 'video',
    desc: 'Генерация видео до 1 минуты по текстовому описанию. Революционная модель OpenAI.',
    url: 'https://openai.com/sora'
  },
  {
    name: 'Runway Gen-3',
    company: 'Runway',
    icon: '🎥',
    category: 'video',
    desc: 'Профессиональная генерация и редактирование видео с помощью AI.',
    url: 'https://runwayml.com'
  },
  {
    name: 'Kling AI',
    company: 'Kuaishou',
    icon: '📹',
    category: 'video',
    desc: 'Китайская модель генерации видео с высоким реализмом. Конкурент Sora.',
    url: 'https://klingai.com'
  },
  {
    name: 'GitHub Copilot',
    company: 'GitHub / OpenAI',
    icon: '👨‍💻',
    category: 'code',
    desc: 'AI-ассистент для программирования. Автодополнение кода в IDE на основе GPT-4.',
    url: 'https://github.com/features/copilot'
  },
  {
    name: 'Cursor',
    company: 'Anysphere',
    icon: '⌨️',
    category: 'code',
    desc: 'AI-первый редактор кода. Интегрирует Claude и GPT для написания и рефакторинга.',
    url: 'https://cursor.sh'
  },
  {
    name: 'DeepSeek Coder',
    company: 'DeepSeek',
    icon: '🔍',
    category: 'code',
    desc: 'Открытая модель для написания кода. Конкурирует с GPT-4 при меньшем размере.',
    url: 'https://deepseek.com'
  }
];
