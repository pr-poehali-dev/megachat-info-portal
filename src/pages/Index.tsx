import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeDemoMessage, setActiveDemoMessage] = useState('');
  const [demoMessages, setDemoMessages] = useState<Array<{ role: string; text: string }>>([]);

  const features = [
    {
      icon: 'Brain',
      title: 'Умный AI-помощник',
      description: 'Нейросеть, обученная на образовательных материалах для школьников',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Zap',
      title: 'Быстрые ответы',
      description: 'Мгновенные ответы на вопросы по любым школьным предметам',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Модерация контента и защита персональных данных учеников',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'BookOpen',
      title: 'База знаний',
      description: 'Доступ к проверенным учебным материалам и справочникам',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Users',
      title: 'Групповая работа',
      description: 'Совместное решение задач с одноклассниками',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: 'TrendingUp',
      title: 'Прогресс обучения',
      description: 'Отслеживание успеваемости и аналитика знаний',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const useCases = [
    {
      icon: 'Calculator',
      title: 'Решение задач',
      description: 'Помощь с математикой, физикой, химией с подробными объяснениями каждого шага'
    },
    {
      icon: 'Languages',
      title: 'Изучение языков',
      description: 'Практика иностранных языков, проверка грамматики и расширение словарного запаса'
    },
    {
      icon: 'FileText',
      title: 'Написание эссе',
      description: 'Помощь в структурировании мыслей, проверка орфографии и стилистики'
    },
    {
      icon: 'Lightbulb',
      title: 'Подготовка к экзаменам',
      description: 'Составление учебных планов, тесты и повторение пройденного материала'
    },
    {
      icon: 'Code',
      title: 'Программирование',
      description: 'Обучение основам кодирования с примерами и объяснениями'
    },
    {
      icon: 'Globe',
      title: 'Исследовательские проекты',
      description: 'Поиск информации и помощь в оформлении научных работ'
    }
  ];

  const faqItems = [
    {
      question: 'Что такое MegaSchoolChat?',
      answer: 'MegaSchoolChat — это современная нейросеть, специально разработанная для школьников. Она помогает с учебой, отвечает на вопросы по школьным предметам и поддерживает в образовательном процессе.'
    },
    {
      question: 'Как начать пользоваться?',
      answer: 'Просто зарегистрируйтесь на платформе, подтвердите свой email и начните задавать вопросы. Нейросеть готова помочь вам 24/7.'
    },
    {
      question: 'Безопасно ли это для детей?',
      answer: 'Да, абсолютно. Мы используем продвинутые системы модерации контента, не храним личные данные дольше необходимого и следуем всем стандартам защиты информации.'
    },
    {
      question: 'Это бесплатно?',
      answer: 'Да! MegaSchoolChat полностью бесплатен. Все функции доступны без ограничений и платных подписок.'
    },
    {
      question: 'Может ли нейросеть решать домашние задания?',
      answer: 'MegaSchoolChat помогает понять материал и объясняет решения, но не решает задачи за вас. Наша цель — помочь в обучении, а не заменить его.'
    },
    {
      question: 'На каких устройствах работает?',
      answer: 'MegaSchoolChat доступен в веб-браузере на любом устройстве, а также есть мобильные приложения для iOS и Android.'
    }
  ];

  const handleSendDemo = () => {
    if (!activeDemoMessage.trim()) return;
    
    setDemoMessages([...demoMessages, { role: 'user', text: activeDemoMessage }]);
    setActiveDemoMessage('');
    
    setTimeout(() => {
      setDemoMessages(prev => [...prev, {
        role: 'assistant',
        text: 'Привет! Я MegaSchoolChat. Это демо-версия. Я помогу тебе с учебой, объясню сложные темы и отвечу на вопросы по школьным предметам. Чем могу помочь?'
      }]);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold glow-text">MegaSchoolChat</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">Функции</button>
              <button onClick={() => scrollToSection('use-cases')} className="hover:text-primary transition-colors">Применение</button>
              <button onClick={() => scrollToSection('demo')} className="hover:text-primary transition-colors">Демо</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('agreement')} className="hover:text-primary transition-colors">Соглашение</button>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Начать
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in bg-primary/20 text-primary border-primary/30">
            Образование будущего уже здесь
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in glow-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            MegaSchoolChat
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Умная нейросеть для школьников. Помощь в учёбе, ответы на вопросы и поддержка 24/7
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 glow" onClick={() => scrollToSection('demo')}>
              Попробовать
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('about')}>
              Узнать больше
            </Button>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-float" />
            <div className="relative glass rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-left space-y-3">
                <div className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span className="text-muted-foreground">Привет, объясни мне теорему Пифагора простыми словами</span>
                </div>
                <div className="pl-4 text-foreground">
                  <p>Конечно! Теорема Пифагора говорит, что в прямоугольном треугольнике квадрат длины гипотенузы равен сумме квадратов длин катетов...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Возможности платформы</h2>
            <p className="text-xl text-muted-foreground">Всё необходимое для эффективного обучения</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover:glow transition-all duration-300 hover:scale-105 animate-fade-in border-border/50">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 glow`}>
                    <Icon name={feature.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Случаи использования</h2>
            <p className="text-xl text-muted-foreground">Как MegaSchoolChat помогает в учёбе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon name={useCase.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Интерактивное демо</h2>
            <p className="text-xl text-muted-foreground">Попробуйте MegaSchoolChat прямо сейчас</p>
          </div>
          <Card className="glass glow">
            <CardContent className="p-6">
              <ScrollArea className="h-[400px] mb-4 pr-4">
                {demoMessages.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-center text-muted-foreground">
                    <div>
                      <Icon name="MessageSquare" size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Начните диалог с нейросетью</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {demoMessages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-lg p-4 ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={activeDemoMessage}
                  onChange={(e) => setActiveDemoMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendDemo()}
                  placeholder="Задайте вопрос нейросети..."
                  className="flex-1 bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button onClick={handleSendDemo} className="bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о MegaSchoolChat</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">О продукте</h2>
          </div>
          <Card className="glass border-border/50">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-primary">Наша миссия</h3>
                <p className="text-muted-foreground text-lg">
                  MegaSchoolChat создан с целью сделать образование более доступным и эффективным. Мы верим, что каждый ученик заслуживает персонального помощника, который будет поддерживать его на пути к знаниям.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">Технология</h3>
                <p className="text-muted-foreground text-lg">
                  В основе MegaSchoolChat лежат передовые языковые модели, обученные на миллионах образовательных материалов. Наша нейросеть постоянно обучается и улучшается, чтобы давать максимально точные и полезные ответы.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-accent">Безопасность и этика</h3>
                <p className="text-muted-foreground text-lg">
                  Мы серьёзно относимся к безопасности данных учеников. Вся информация шифруется, мы не передаём данные третьим лицам и следуем строгим этическим стандартам в области AI и образования.
                </p>
              </div>
              <div className="pt-4">
                <Tabs defaultValue="stats" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="stats">Статистика</TabsTrigger>
                    <TabsTrigger value="team">Команда</TabsTrigger>
                    <TabsTrigger value="contact">Контакты</TabsTrigger>
                  </TabsList>
                  <TabsContent value="stats" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 glass rounded-lg">
                        <div className="text-3xl font-bold text-primary">50K+</div>
                        <div className="text-sm text-muted-foreground">Активных учеников</div>
                      </div>
                      <div className="text-center p-4 glass rounded-lg">
                        <div className="text-3xl font-bold text-secondary">1M+</div>
                        <div className="text-sm text-muted-foreground">Вопросов обработано</div>
                      </div>
                      <div className="text-center p-4 glass rounded-lg">
                        <div className="text-3xl font-bold text-accent">98%</div>
                        <div className="text-sm text-muted-foreground">Точность ответов</div>
                      </div>
                      <div className="text-center p-4 glass rounded-lg">
                        <div className="text-3xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-muted-foreground">Доступность</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="team" className="pt-4">
                    <p className="text-muted-foreground">
                      Наша команда состоит из опытных разработчиков AI, педагогов и дизайнеров, которые работают над созданием лучшего образовательного инструмента. Мы объединили экспертизу в области машинного обучения и образования, чтобы создать действительно полезный продукт.
                    </p>
                  </TabsContent>
                  <TabsContent value="contact" className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Mail" size={20} className="text-primary" />
                        <a href="mailto:MegaSchoolChat@gmail.com" className="hover:text-primary transition-colors">MegaSchoolChat@gmail.com</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Globe" size={20} className="text-primary" />
                        <a href="https://ai-school-tools--preview.poehali.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Официальный сайт</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="MessageCircle" size={20} className="text-primary" />
                        <span>Техническая поддержка 24/7</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="agreement" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Пользовательское соглашение</h2>
            <p className="text-muted-foreground">Последнее обновление: 16 декабря 2024</p>
          </div>
          <Card className="glass border-border/50">
            <CardContent className="p-8">
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">1. Общие положения</h3>
                    <p>
                      Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между администрацией сервиса MegaSchoolChat (далее — «Сервис») и пользователем (далее — «Пользователь») при использовании платформы и всех связанных с ней услуг.
                    </p>
                    <p className="mt-2">
                      Использование Сервиса означает безоговорочное согласие Пользователя с настоящим Соглашением и указанными в нём условиями. В случае несогласия с этими условиями Пользователь должен воздержаться от использования Сервиса.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">2. Регистрация и учётная запись</h3>
                    <p>
                      2.1. Для доступа к полному функционалу Сервиса требуется регистрация. При регистрации Пользователь обязуется предоставить достоверную и полную информацию о себе.
                    </p>
                    <p className="mt-2">
                      2.2. Пользователь несёт ответственность за сохранность своих учётных данных и самостоятельно отвечает за все действия, совершённые под его учётной записью.
                    </p>
                    <p className="mt-2">
                      2.3. Если Пользователю менее 18 лет, использование Сервиса должно осуществляться с согласия родителей или законных представителей.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">3. Правила использования</h3>
                    <p>
                      3.1. Пользователь обязуется использовать Сервис только в законных целях и в соответствии с настоящим Соглашением.
                    </p>
                    <p className="mt-2">
                      3.2. Запрещается использование Сервиса для:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Публикации материалов, нарушающих авторские права или другие права интеллектуальной собственности</li>
                      <li>Распространения вредоносного программного обеспечения</li>
                      <li>Оскорбления, угроз или преследования других пользователей</li>
                      <li>Любых действий, направленных на нарушение работы Сервиса</li>
                      <li>Попыток обойти системы безопасности или получить несанкционированный доступ</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">4. Интеллектуальная собственность</h3>
                    <p>
                      4.1. Все права на Сервис, включая программное обеспечение, дизайн, графические элементы и контент, принадлежат администрации MegaSchoolChat или её лицензиарам.
                    </p>
                    <p className="mt-2">
                      4.2. Запрещается копирование, модификация, распространение или воспроизведение любых элементов Сервиса без письменного разрешения администрации.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">5. Конфиденциальность</h3>
                    <p>
                      5.1. Администрация обязуется обеспечивать конфиденциальность персональных данных Пользователей в соответствии с Политикой конфиденциальности.
                    </p>
                    <p className="mt-2">
                      5.2. Сервис может собирать анонимные данные об использовании платформы для улучшения качества предоставляемых услуг.
                    </p>
                    <p className="mt-2">
                      5.3. Администрация не передаёт персональные данные Пользователей третьим лицам, за исключением случаев, предусмотренных законодательством.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">6. Ответственность</h3>
                    <p>
                      6.1. Сервис предоставляется «как есть». Администрация не гарантирует бесперебойную работу и отсутствие ошибок.
                    </p>
                    <p className="mt-2">
                      6.2. Администрация не несёт ответственности за любые прямые или косвенные убытки, возникшие в результате использования или невозможности использования Сервиса.
                    </p>
                    <p className="mt-2">
                      6.3. Пользователь самостоятельно несёт ответственность за информацию, которую размещает в Сервисе.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">7. Бесплатность сервиса</h3>
                    <p>
                      7.1. Все функции Сервиса предоставляются абсолютно бесплатно.
                    </p>
                    <p className="mt-2">
                      7.2. Администрация оставляет за собой право в будущем добавить платные опции, о чём Пользователи будут уведомлены заранее.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">8. Изменение и прекращение работы Сервиса</h3>
                    <p>
                      8.1. Администрация оставляет за собой право в любое время изменять содержание Сервиса, добавлять или удалять функциональные возможности.
                    </p>
                    <p className="mt-2">
                      8.2. Администрация имеет право приостановить или прекратить работу Сервиса без предварительного уведомления.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">9. Изменения в Соглашении</h3>
                    <p>
                      9.1. Администрация имеет право в одностороннем порядке изменять условия настоящего Соглашения.
                    </p>
                    <p className="mt-2">
                      9.2. Новая редакция Соглашения вступает в силу с момента её размещения на сайте, если иное не предусмотрено новой редакцией Соглашения.
                    </p>
                    <p className="mt-2">
                      9.3. Продолжение использования Сервиса после внесения изменений означает согласие Пользователя с новыми условиями.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">10. Заключительные положения</h3>
                    <p>
                      10.1. К настоящему Соглашению и отношениям между Пользователем и Администрацией применяется действующее законодательство Российской Федерации.
                    </p>
                    <p className="mt-2">
                      10.2. Все споры решаются путём переговоров. При невозможности достижения соглашения споры разрешаются в судебном порядке по месту нахождения Администрации.
                    </p>
                    <p className="mt-2">
                      10.3. Если какое-либо положение настоящего Соглашения является недействительным, остальные положения сохраняют свою силу.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm">
                      По всем вопросам, связанным с настоящим Соглашением, обращайтесь по адресу: <a href="mailto:MegaSchoolChat@gmail.com" className="text-primary hover:underline">MegaSchoolChat@gmail.com</a>
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">MegaSchoolChat</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Умная нейросеть для школьников. Помощь в учёбе 24/7.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">Функции</button></li>
                <li><button onClick={() => scrollToSection('use-cases')} className="hover:text-primary transition-colors">Применение</button></li>
                <li><button onClick={() => scrollToSection('demo')} className="hover:text-primary transition-colors">Демо</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('agreement')} className="hover:text-primary transition-colors">Соглашение</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:MegaSchoolChat@gmail.com" className="hover:text-primary transition-colors">MegaSchoolChat@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  <a href="https://ai-school-tools--preview.poehali.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Официальный сайт</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 MegaSchoolChat. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}