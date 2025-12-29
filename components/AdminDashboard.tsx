import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Mail, 
  Eye, 
  TrendingUp, 
  MessageSquare, 
  Globe, 
  Calendar,
  LogOut,
  RefreshCw,
  Download,
  Filter,
  Search,
  CheckCircle,
  Clock,
  Reply
} from 'lucide-react';
import { analytics, ContactMessage } from '../utils/analytics';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estados para dados reais
  const [stats, setStats] = useState(analytics.getCalculatedStats());
  const [messages, setMessages] = useState<ContactMessage[]>(analytics.getMessages());
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>(messages);

  // Atualizar dados
  const refreshData = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newStats = analytics.getCalculatedStats();
    const newMessages = analytics.getMessages();
    
    setStats(newStats);
    setMessages(newMessages);
    setFilteredMessages(newMessages);
    setIsLoading(false);
  };

  // Filtrar mensagens por busca
  useEffect(() => {
    if (!searchTerm) {
      setFilteredMessages(messages);
    } else {
      const filtered = messages.filter(message =>
        message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMessages(filtered);
    }
  }, [searchTerm, messages]);

  // Atualizar status da mensagem
  const updateMessageStatus = (messageId: string, status: ContactMessage['status']) => {
    analytics.updateMessageStatus(messageId, status);
    refreshData();
  };

  // Exportar mensagens
  const exportMessages = () => {
    const csvContent = [
      ['Nome', 'Email', 'Assunto', 'Mensagem', 'Data', 'Status'],
      ...messages.map(msg => [
        msg.name,
        msg.email,
        msg.subject,
        msg.message.replace(/\n/g, ' '),
        new Date(msg.date).toLocaleString(),
        msg.status
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `mensagens_kukuladevz_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const StatCard = ({ title, value, icon: Icon, trend, color = 'brand-green' }: any) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {trend !== undefined && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-600'}`}>
              <TrendingUp className="w-4 h-4" />
              {trend > 0 ? '+' : ''}{trend}% este mês
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}`} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard Admin</h1>
                <p className="text-sm text-gray-500">Ku_KulaDevz</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={refreshData}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                Atualizar
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg text-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Visão Geral', icon: BarChart3 },
              { id: 'messages', label: 'Mensagens', icon: MessageSquare },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-brand-green text-brand-green'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total de Visitas"
                value={stats.totalVisits.toLocaleString()}
                icon={Eye}
                trend={stats.todayVisits > 0 ? 15 : 0}
              />
              <StatCard
                title="Mensagens Recebidas"
                value={stats.totalMessages}
                icon={Mail}
                trend={stats.thisMonthMessages > 0 ? 25 : 0}
              />
              <StatCard
                title="Visitantes Únicos"
                value={stats.totalUniqueVisitors.toLocaleString()}
                icon={Users}
                trend={stats.totalUniqueVisitors > 0 ? 12 : 0}
              />
              <StatCard
                title="Taxa de Conversão"
                value={`${stats.conversionRate}%`}
                icon={TrendingUp}
                trend={stats.conversionRate > 0 ? 8 : 0}
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas Rápidas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Visitantes hoje</span>
                    <span className="font-semibold">{stats.todayVisits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tempo médio</span>
                    <span className="font-semibold">{stats.avgSessionTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxa de rejeição</span>
                    <span className="font-semibold">{stats.bounceRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mensagens hoje</span>
                    <span className="font-semibold">{stats.todayMessages}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mensagens Recentes</h3>
                {messages.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Nenhuma mensagem recebida ainda.</p>
                    <p className="text-sm">As mensagens aparecerão aqui quando alguém usar o formulário de contato.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {messages.slice(0, 3).map((message) => (
                      <div key={message.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{message.name}</p>
                          <p className="text-sm text-gray-600 truncate">{message.subject}</p>
                        </div>
                        <div className="text-right flex items-center gap-2">
                          {message.status === 'new' && <span className="w-2 h-2 bg-green-500 rounded-full" />}
                          {message.status === 'read' && <Clock className="w-4 h-4 text-yellow-500" />}
                          {message.status === 'replied' && <CheckCircle className="w-4 h-4 text-gray-400" />}
                          <p className="text-xs text-gray-500">
                            {new Date(message.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-6">
            {/* Messages Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Mensagens de Contato</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar mensagens..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>
                {messages.length > 0 && (
                  <button 
                    onClick={exportMessages}
                    className="flex items-center gap-2 px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Exportar
                  </button>
                )}
              </div>
            </div>

            {/* Messages List */}
            {filteredMessages.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12 text-center">
                <Mail className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {messages.length === 0 ? 'Nenhuma mensagem ainda' : 'Nenhuma mensagem encontrada'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {messages.length === 0 
                    ? 'Quando alguém enviar uma mensagem pelo formulário de contato, ela aparecerá aqui.'
                    : 'Tente ajustar os termos de busca para encontrar mensagens específicas.'
                  }
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-4 py-2 bg-brand-green text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Limpar Busca
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remetente</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assunto</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredMessages.map((message) => (
                        <tr key={message.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{message.name}</div>
                              <div className="text-sm text-gray-500">{message.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{message.subject}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{message.message}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(message.date).toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              message.status === 'new' ? 'bg-green-100 text-green-800' :
                              message.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {message.status === 'new' ? 'Nova' : message.status === 'read' ? 'Lida' : 'Respondida'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button 
                              onClick={() => updateMessageStatus(message.id, 'read')}
                              className="text-brand-green hover:text-green-600 mr-3"
                            >
                              Marcar como Lida
                            </button>
                            <a 
                              href={`mailto:${message.email}?subject=Re: ${message.subject}`}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Responder
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Analytics do Site</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Page Views */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Páginas Mais Visitadas</h3>
                {stats.topPages.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Dados de páginas aparecerão conforme as visitas.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {stats.topPages.map((page, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{page.page}</span>
                            <span className="text-sm text-gray-500">{page.views.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-brand-green h-2 rounded-full" 
                              style={{ width: `${page.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Traffic Sources */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Fontes de Tráfego</h3>
                {stats.topSources.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Globe className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Dados de tráfego aparecerão conforme as visitas.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {stats.topSources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">{source.source}</span>
                            <span className="text-sm text-gray-500">{source.visitors.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${source.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;