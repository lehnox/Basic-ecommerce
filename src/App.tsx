import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link, Navigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { 
  Package, 
  CreditCard, 
  Receipt, 
  Wrench, 
  Factory,
  BarChart3,
  Home,
  DollarSign,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Users,
  ShoppingCart,
  FileText,
  Settings,
  Bell,
  Search,
  Check,
  ArrowRight,
  Cloud,
  Shield,
  Clock,
  Lock,
  Building2,
  Wallet,
  ClipboardList,
  UserPlus,
  ShoppingBag,
  FileCode,
  FileCheck,
  Activity
} from 'lucide-react'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true'
  })

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true')
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage onLogin={handleLogin} />
        } />
        <Route path="/dashboard" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/estoque" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/contas-receber" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/cartao" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/contas-pagar" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/servico" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/producao" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/relatorios" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/multiempresa" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/indicadores" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/caixa" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/ordem-servico" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/cadastros" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/pedido" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/importacao-xml" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
        <Route path="/manifestacao-nfe" element={
          isAuthenticated ? <MainApp onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } />
      </Routes>
    </Router>
  )
}

function LandingPage() {

  const features = [
    {
      icon: Building2,
      title: 'Sistema Multiempresa',
      description: 'Controle todas as suas empresas e todos os seus estoques na mesma plataforma de forma simples e ágil'
    },
    {
      icon: Activity,
      title: 'Painel de Indicadores',
      description: 'Mantenha o controle das ações e resultados de sua empresa, compreenda melhor quais caminhos seguir'
    },
    {
      icon: Wallet,
      title: 'Controle de Caixa',
      description: 'Controle a abertura e fechamento de um ou mais caixas com precisão para não perder tempo nem dinheiro'
    },
    {
      icon: ClipboardList,
      title: 'Ordem de Serviço',
      description: 'Conquiste mais organização na prestação de serviços e maior controle dos serviços e realizadores'
    },
    {
      icon: UserPlus,
      title: 'Cadastros',
      description: 'Cadastre usuários, clientes, fornecedores e transportadoras, e gerencie melhor seu empreendimento'
    },
    {
      icon: ShoppingBag,
      title: 'Pedido',
      description: 'Na hora de fazer o pedido para seus fornecedores, o sistema lhe indicará quais decisões tomar'
    },
    {
      icon: FileCode,
      title: 'Importação de XML',
      description: 'Não perca tempo cadastrando produtos, dê entrada de mercadorias com xml em poucos cliques, é muito mais agilidade'
    },
    {
      icon: FileCheck,
      title: 'Manifestação NFe',
      description: 'Tenha o controle de todas as notas direcionadas ao seu CNPJ, é muito mais segurança e praticidade'
    },
    {
      icon: BarChart3,
      title: 'Relatórios',
      description: 'Nada de ficar tomando decisão no escuro, os relatórios são simples e objetivos'
    },
    {
      icon: Package,
      title: 'Controle de Estoque',
      description: 'Gestão completa de estoque com curvas ABC, inventário e sugestão de compras'
    },
    {
      icon: DollarSign,
      title: 'Contas a Receber',
      description: 'Controle financeiro completo com geração de boletos e cobrança bancária'
    },
    {
      icon: CreditCard,
      title: 'Cartão de Crédito',
      description: 'Gestão de vendas em cartão com previsão de recebimento e múltiplas operadoras'
    },
    {
      icon: Receipt,
      title: 'Contas a Pagar',
      description: 'Organize suas despesas por natureza e controle todos os pagamentos'
    },
    {
      icon: Wrench,
      title: 'Serviço Automotivo',
      description: 'Gestão completa de oficina com ordens de serviço e comissões'
    },
    {
      icon: Factory,
      title: 'Fabricação/Produção',
      description: 'Controle de produção com simulação de custos e tempo de entrega'
    },
    {
      icon: Cloud,
      title: 'Servidor em Nuvem',
      description: 'Acesso 24/7 de qualquer lugar, com segurança e backup automático'
    }
  ]

  const benefits = [
    'Acesso 24 horas por dia, 7 dias por semana',
    'Sistema integrado - todos os módulos conectados',
    'Interface moderna e intuitiva',
    'Relatórios em tempo real',
    'Backup automático na nuvem',
    'Suporte técnico especializado',
    'Atualizações constantes',
    'Segurança de dados garantida'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-orange-500 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">Sistema de Gestão</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="hover:text-orange-400 transition-colors">Funcionalidades</a>
              <a href="#benefits" className="hover:text-orange-400 transition-colors">Benefícios</a>
              <Link to="/login" className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sistema de Gestão Empresarial
              <span className="block text-orange-300 mt-2">Completo e Integrado</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Controle total do seu negócio em um só lugar. Estoque, financeiro, vendas e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/login"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Começar Agora
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <a 
                href="#features"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
              >
                Conhecer Funcionalidades
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-orange-200">
              <div className="flex items-center space-x-2">
                <Cloud className="w-5 h-5" />
                <span>Servidor em Nuvem</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Acesso 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Funcionalidades Completas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar seu negócio de forma eficiente e profissional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que escolher nosso sistema?</h2>
              <p className="text-xl text-gray-600">
                Benefícios que fazem a diferença no seu dia a dia
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-orange-600 rounded-full p-2 flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-orange-200">Satisfação</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-orange-200">Disponibilidade</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-orange-200">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-orange-200">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Comece agora e tenha controle total da sua empresa
            </p>
            <Link 
              to="/login"
              className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Acessar Sistema
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-orange-500 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="w-6 h-6" />
                <h3 className="text-xl font-bold">Sistema de Gestão</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Solução completa para gestão empresarial
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-orange-400">Funcionalidades</a></li>
                <li><a href="#benefits" className="hover:text-orange-400">Benefícios</a></li>
                <li><a href="#" className="hover:text-orange-400">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-orange-400">Documentação</a></li>
                <li><a href="#" className="hover:text-orange-400">Contato</a></li>
                <li><a href="#" className="hover:text-orange-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: contato@sistemagestao.com</li>
                <li>Telefone: (00) 0000-0000</li>
                <li className="flex items-center space-x-2 mt-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Servidor Online</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-500/20 pt-8 text-center text-sm text-gray-400">
            <p>&copy; Desenvolvido para teste</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username && password) {
      onLogin()
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-orange-700 to-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transform transition-all">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Package className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sistema de Gestão</h1>
          <p className="text-gray-600 text-lg">Acesso ao sistema empresarial</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Usuário
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Digite seu usuário"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Digite sua senha"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3.5 rounded-lg font-bold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Entrar no Sistema
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link to="/" className="text-orange-600 hover:text-orange-700 text-sm font-semibold">
            ← Voltar para a página inicial
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Servidor em nuvem - Acesso 24/7</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function MainApp({ onLogout }: { onLogout: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/multiempresa', icon: Building2, label: 'Multiempresa' },
    { path: '/indicadores', icon: Activity, label: 'Indicadores' },
    { path: '/caixa', icon: Wallet, label: 'Caixa' },
    { path: '/estoque', icon: Package, label: 'Estoque' },
    { path: '/ordem-servico', icon: ClipboardList, label: 'Ordem Serviço' },
    { path: '/cadastros', icon: UserPlus, label: 'Cadastros' },
    { path: '/pedido', icon: ShoppingBag, label: 'Pedido' },
    { path: '/importacao-xml', icon: FileCode, label: 'Importação XML' },
    { path: '/manifestacao-nfe', icon: FileCheck, label: 'Manifestação NFe' },
    { path: '/contas-receber', icon: DollarSign, label: 'A Receber' },
    { path: '/cartao', icon: CreditCard, label: 'Cartão' },
    { path: '/contas-pagar', icon: Receipt, label: 'A Pagar' },
    { path: '/servico', icon: Wrench, label: 'Serviço' },
    { path: '/producao', icon: Factory, label: 'Produção' },
    { path: '/relatorios', icon: BarChart3, label: 'Relatórios' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-black to-gray-900 text-orange-500 transition-all duration-300 fixed h-full z-50 shadow-2xl`}>
        <div className="p-4 flex items-center justify-between border-b border-orange-500/20">
          {sidebarOpen && (
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Package className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">Sistema</h1>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-orange-600 hover:text-white rounded-lg transition-all"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="mt-6 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 mb-2 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg'
                    : 'hover:bg-orange-600/20 hover:text-orange-400 text-orange-500'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-orange-500/20">
          <button
            onClick={onLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-600 hover:text-white text-orange-500 transition-all duration-200 w-full group"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && (
              <span className="font-medium">Sair do Sistema</span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold">
                  U
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-800">Usuário</p>
                  <p className="text-xs text-gray-500">Administrador</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {location.pathname === '/dashboard' && <HomePage />}
          {location.pathname === '/estoque' && <EstoquePage />}
          {location.pathname === '/contas-receber' && <ContasReceberPage />}
          {location.pathname === '/cartao' && <CartaoPage />}
          {location.pathname === '/contas-pagar' && <ContasPagarPage />}
          {location.pathname === '/servico' && <ServicoPage />}
          {location.pathname === '/producao' && <ProducaoPage />}
          {location.pathname === '/relatorios' && <RelatoriosPage />}
          {location.pathname === '/multiempresa' && <MultiempresaPage />}
          {location.pathname === '/indicadores' && <IndicadoresPage />}
          {location.pathname === '/caixa' && <CaixaPage />}
          {location.pathname === '/ordem-servico' && <OrdemServicoPage />}
          {location.pathname === '/cadastros' && <CadastrosPage />}
          {location.pathname === '/pedido' && <PedidoPage />}
          {location.pathname === '/importacao-xml' && <ImportacaoXmlPage />}
          {location.pathname === '/manifestacao-nfe' && <ManifestacaoNfePage />}
        </main>

        <footer className="bg-black text-orange-500 mt-12 py-6 border-t border-orange-500/20">
          <div className="container mx-auto px-6 text-center">
            <p className="font-semibold">&copy; Desenvolvido para teste.</p>
            <p className="text-sm text-gray-400 mt-2 flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Servidor em nuvem - Acesso 24/7</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function HomePage() {
  const stats = [
    { label: 'Vendas do Mês', value: 'R$ 245.230,00', icon: TrendingUp, color: 'bg-green-500', change: '+12.5%' },
    { label: 'Produtos em Estoque', value: '1.234', icon: Package, color: 'bg-blue-500', change: '+5.2%' },
    { label: 'Clientes Ativos', value: '567', icon: Users, color: 'bg-purple-500', change: '+8.1%' },
    { label: 'Pedidos Pendentes', value: '23', icon: ShoppingCart, color: 'bg-orange-500', change: '-3.4%' },
  ]

  const modules = [
    { 
      title: 'Controle de Estoque', 
      icon: Package, 
      path: '/estoque',
      color: 'from-orange-500 to-orange-600',
      description: 'Gestão completa de estoque'
    },
    { 
      title: 'Contas a Receber', 
      icon: DollarSign, 
      path: '/contas-receber',
      color: 'from-green-500 to-green-600',
      description: 'Controle financeiro'
    },
    { 
      title: 'Cartão de Crédito', 
      icon: CreditCard, 
      path: '/cartao',
      color: 'from-blue-500 to-blue-600',
      description: 'Gestão de vendas'
    },
    { 
      title: 'Contas a Pagar', 
      icon: Receipt, 
      path: '/contas-pagar',
      color: 'from-red-500 to-red-600',
      description: 'Controle de despesas'
    },
    { 
      title: 'Serviço Automotivo', 
      icon: Wrench, 
      path: '/servico',
      color: 'from-purple-500 to-purple-600',
      description: 'Gestão de oficina'
    },
    { 
      title: 'Fabricação/Produção', 
      icon: Factory, 
      path: '/producao',
      color: 'from-yellow-500 to-yellow-600',
      description: 'Controle de produção'
    },
    { 
      title: 'Relatórios', 
      icon: BarChart3, 
      path: '/relatorios',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Análises gerenciais'
    },
    { 
      title: 'Multiempresa', 
      icon: Building2, 
      path: '/multiempresa',
      color: 'from-teal-500 to-teal-600',
      description: 'Controle múltiplas empresas'
    },
    { 
      title: 'Indicadores', 
      icon: Activity, 
      path: '/indicadores',
      color: 'from-pink-500 to-pink-600',
      description: 'Painel de KPIs'
    },
    { 
      title: 'Caixa', 
      icon: Wallet, 
      path: '/caixa',
      color: 'from-emerald-500 to-emerald-600',
      description: 'Controle de caixa'
    },
    { 
      title: 'Cadastros', 
      icon: UserPlus, 
      path: '/cadastros',
      color: 'from-cyan-500 to-cyan-600',
      description: 'Gestão de cadastros'
    },
    { 
      title: 'Pedido', 
      icon: ShoppingBag, 
      path: '/pedido',
      color: 'from-violet-500 to-violet-600',
      description: 'Gestão de pedidos'
    },
    { 
      title: 'Importação XML', 
      icon: FileCode, 
      path: '/importacao-xml',
      color: 'from-amber-500 to-amber-600',
      description: 'Importação de notas'
    },
    { 
      title: 'Manifestação NFe', 
      icon: FileCheck, 
      path: '/manifestacao-nfe',
      color: 'from-lime-500 to-lime-600',
      description: 'Controle de NFe'
    },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Visão geral do sistema</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Modules Grid */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Módulos do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <Link 
                key={index}
                to={module.path}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className={`bg-gradient-to-r ${module.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function EstoquePage() {
  const funcionalidades = [
    'Controle de Estoque',
    'Fornecedores',
    'Cadastro de Itens',
    'Lançamentos de Entrada / Controle de Compras',
    'Curvas ABC / Giro dos Itens',
    'Controle por Local de Estocagem',
    'Sugestão de Compras',
    'Contagem Física - Inventário',
    'Atualização de Custo/Preços',
    'Vendas - Faturamento',
    'Consulta aos Itens (evita perder vendas)',
    'Baixa Automática no Estoque',
    'Acompanhamento das Vendas por Data, Vendedor, Grupo',
    'Vendas Parceladas com Títulos no Contas a Receber',
    'Comissão a Vendedores',
    'Caixa do Dia',
    'Análise do Faturamento Dia/Mês',
    'Relatórios sobre Tópicos Citados'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Controle de Estoque</h1>
        <p className="text-gray-600">Gestão completa de estoque e vendas</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <Package className="w-5 h-5 mr-2 text-orange-600" />
            Funcionalidades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span className="text-gray-700 text-sm">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl">
              Nova Entrada
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Consultar Item
            </button>
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl">
              Sugestão de Compras
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Inventário
            </button>
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl">
              Curva ABC
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContasReceberPage() {
  const funcionalidades = [
    'Todos seus Clientes Cadastrados',
    'Títulos a Receber no Dia ou Período',
    'Títulos Recebidos no Dia ou Período',
    'Histórico do Cliente, com Eventuais Atrasos',
    'Remessa para Cobrança Bancária e Geração de Boletos',
    'Baixa Automática no Retorno de Cobrança Bancária',
    'Relatórios Diversos sobre os Tópicos Citados'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contas a Receber</h1>
        <p className="text-gray-600">Controle financeiro de recebimentos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-green-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg">
              Novo Título
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Títulos do Dia
            </button>
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg">
              Gerar Boletos
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Histórico Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CartaoPage() {
  const funcionalidades = [
    'Cadastro das Operadoras',
    'Lançamento das Vendas em Cartão de Crédito',
    'Relação de Cada Venda, por Administradora, com Líquido a Receber',
    'Previsão do Recebimento Líquido, para Acompanhamento do Extrato'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cartão de Crédito</h1>
        <p className="text-gray-600">Gestão de vendas em cartão</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
              Nova Venda Cartão
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Cadastrar Operadora
            </button>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
              Previsão Recebimento
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContasPagarPage() {
  const funcionalidades = [
    'Organização das Despesas por Natureza',
    'Títulos a Pagar no Dia ou Período',
    'Títulos Pagos no Dia ou Período',
    'Títulos de Cada Fornecedor',
    'Relatórios Gerais'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contas a Pagar</h1>
        <p className="text-gray-600">Controle de despesas e pagamentos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <Receipt className="w-5 h-5 mr-2 text-red-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                <span className="text-red-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg">
              Novo Título
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Títulos do Dia
            </button>
            <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg">
              Por Fornecedor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServicoPage() {
  const funcionalidades = [
    'Cadastro dos Veículos',
    'Ordens de Serviço - com Itens e/ou Mão de Obra',
    'Controle das Ordens de Serviço em Andamento ou Fechadas',
    'Comissão dos Mecânicos/Montadores',
    'Ordens de Serviço por Cliente/Placa',
    'Movimento do Dia ou Período'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Serviço Automotivo</h1>
        <p className="text-gray-600">Gestão de oficina e serviços</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <Wrench className="w-5 h-5 mr-2 text-purple-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
              Nova OS
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Cadastrar Veículo
            </button>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
              OS em Andamento
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Movimento do Dia
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProducaoPage() {
  const funcionalidades = [
    'Cadastro dos Itens Componentes',
    'Cadastro dos Produtos Acabados',
    'Cadastro dos Clientes',
    'Simulação da Produção - Saiba Antes:',
    '  • Materiais e Quantidade Necessários',
    '  • Mão de Obra a ser Aplicada',
    '  • Custo Total para Atender o Pedido',
    '  • Tempo Total para Atender o Pedido',
    'Sistema Integrado com os Demais Módulos'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fabricação / Produção</h1>
        <p className="text-gray-600">Controle de produção e fabricação</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <Factory className="w-5 h-5 mr-2 text-yellow-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
                <span className="text-yellow-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all shadow-lg">
              Nova Produção
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Cadastrar Componente
            </button>
            <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all shadow-lg">
              Simular Produção
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Produtos Acabados
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function RelatoriosPage() {
  const relatorios = [
    'Relatório de Estoque',
    'Relatório de Vendas',
    'Relatório de Compras',
    'Relatório de Contas a Receber',
    'Relatório de Contas a Pagar',
    'Relatório de Cartão de Crédito',
    'Relatório de Serviços',
    'Relatório de Produção',
    'Relatório de Comissões',
    'Relatório de Faturamento',
    'Curva ABC',
    'Giro de Estoque',
    'Análise de Vendas por Período',
    'Análise de Vendas por Vendedor',
    'Análise de Vendas por Grupo'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Relatórios</h1>
        <p className="text-gray-600">Análises e relatórios gerenciais</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatorios.map((relatorio, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-8 h-8 text-indigo-600" />
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">{relatorio}</h3>
            <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-2.5 rounded-lg font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg">
              Gerar Relatório
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function MultiempresaPage() {
  const funcionalidades = [
    'Controle de múltiplas empresas na mesma plataforma',
    'Gestão centralizada de todos os estoques',
    'Troca rápida entre empresas',
    'Relatórios consolidados por empresa',
    'Usuários com permissões por empresa',
    'Financeiro separado por empresa',
    'Dashboard individual por empresa',
    'Integração entre empresas do mesmo grupo'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sistema Multiempresa</h1>
        <p className="text-gray-600">Controle todas as suas empresas e todos os seus estoques na mesma plataforma de forma simples e ágil</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-orange-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg">
              Nova Empresa
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Trocar Empresa
            </button>
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg">
              Relatório Consolidado
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Configurar Permissões
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function IndicadoresPage() {
  const indicadores = [
    'KPIs em tempo real',
    'Gráficos de vendas e faturamento',
    'Indicadores de estoque',
    'Análise de rentabilidade',
    'Performance de vendedores',
    'Margem de lucro por produto',
    'Taxa de conversão',
    'Tempo médio de atendimento',
    'Satisfação do cliente',
    'Indicadores financeiros'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Painel de Indicadores</h1>
        <p className="text-gray-600">Mantenha o controle das ações e resultados de sua empresa, compreenda melhor quais caminhos seguir</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {indicadores.map((indicador, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8 text-orange-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{indicador}</h3>
            <div className="text-2xl font-bold text-orange-600">--</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CaixaPage() {
  const funcionalidades = [
    'Abertura e fechamento de caixa',
    'Controle de múltiplos caixas simultâneos',
    'Sangria e suprimento de caixa',
    'Conciliação diária',
    'Relatório de movimentação',
    'Controle de troco',
    'Fechamento automático',
    'Histórico completo de operações'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Controle de Caixa</h1>
        <p className="text-gray-600">Controle a abertura e fechamento de um ou mais caixas com precisão para não perder tempo nem dinheiro</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <Wallet className="w-5 h-5 mr-2 text-green-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg">
              Abrir Caixa
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Fechar Caixa
            </button>
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg">
              Sangria
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Relatório do Dia
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function OrdemServicoPage() {
  const funcionalidades = [
    'Criação de ordens de serviço',
    'Controle de status (Aberta, Em Andamento, Finalizada)',
    'Cadastro de serviços e peças',
    'Cálculo automático de valores',
    'Histórico completo de serviços',
    'Relatórios por período',
    'Controle de comissões',
    'Orçamentos e aprovações'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ordem de Serviço</h1>
        <p className="text-gray-600">Conquiste mais organização na prestação de serviços e maior controle dos serviços e realizadores</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <ClipboardList className="w-5 h-5 mr-2 text-blue-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-blue-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
              Nova OS
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              OS em Andamento
            </button>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
              Consultar OS
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Relatório de OS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CadastrosPage() {
  const tipos = [
    { nome: 'Usuários', descricao: 'Cadastro e gestão de usuários do sistema' },
    { nome: 'Clientes', descricao: 'Cadastro completo de clientes com histórico' },
    { nome: 'Fornecedores', descricao: 'Gestão de fornecedores e contatos' },
    { nome: 'Transportadoras', descricao: 'Cadastro de transportadoras e fretes' },
    { nome: 'Produtos', descricao: 'Cadastro de produtos e serviços' },
    { nome: 'Categorias', descricao: 'Organização por categorias e grupos' }
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cadastros</h1>
        <p className="text-gray-600">Cadastre usuários, clientes, fornecedores e transportadoras, e gerencie melhor seu empreendimento</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tipos.map((tipo, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <UserPlus className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{tipo.nome}</h3>
            <p className="text-gray-600 text-sm mb-4">{tipo.descricao}</p>
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all">
              Gerenciar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function PedidoPage() {
  const funcionalidades = [
    'Criação de pedidos para fornecedores',
    'Sugestão automática de compras baseada no estoque',
    'Análise de melhor fornecedor',
    'Controle de prazos de entrega',
    'Acompanhamento de status do pedido',
    'Histórico de pedidos',
    'Comparação de preços',
    'Integração com estoque'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Pedido</h1>
        <p className="text-gray-600">Na hora de fazer o pedido para seus fornecedores, o sistema lhe indicará quais decisões tomar</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2 text-purple-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                <span className="text-purple-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
              Novo Pedido
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Sugestão de Compras
            </button>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
              Pedidos Pendentes
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Histórico
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ImportacaoXmlPage() {
  const funcionalidades = [
    'Importação automática de XML de notas fiscais',
    'Cadastro automático de produtos',
    'Atualização de preços e custos',
    'Entrada automática no estoque',
    'Validação de dados fiscais',
    'Suporte a múltiplos fornecedores',
    'Histórico de importações',
    'Correção de erros de importação'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Importação de XML</h1>
        <p className="text-gray-600">Não perca tempo cadastrando produtos, dê entrada de mercadorias com xml em poucos cliques, é muito mais agilidade</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <FileCode className="w-5 h-5 mr-2 text-orange-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                <span className="text-orange-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg">
              Importar XML
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Importar em Lote
            </button>
            <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg">
              Histórico de Importações
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Configurações
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ManifestacaoNfePage() {
  const funcionalidades = [
    'Controle de todas as notas direcionadas ao seu CNPJ',
    'Manifestação automática ou manual',
    'Download automático de XMLs',
    'Status de cada nota fiscal',
    'Histórico completo de manifestações',
    'Alertas de notas pendentes',
    'Integração com SEFAZ',
    'Relatórios de notas recebidas'
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manifestação NFe</h1>
        <p className="text-gray-600">Tenha o controle de todas as notas direcionadas ao seu CNPJ, é muito mais segurança e praticidade</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <FileCheck className="w-5 h-5 mr-2 text-green-600" />
            Funcionalidades
          </h3>
          <div className="space-y-3">
            {funcionalidades.map((func, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                <span className="text-green-600 mr-2 font-bold">•</span>
                <span className="text-gray-700">{func}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg">
              Consultar Notas
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Manifestar Notas
            </button>
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg">
              Notas Pendentes
            </button>
            <button className="w-full bg-black text-orange-500 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all">
              Relatório
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

