// Sistema de Analytics Local para Ku_KulaDevz
export interface AnalyticsData {
  visits: number;
  messages: number;
  uniqueVisitors: number;
  lastVisit: string;
  pageViews: { [key: string]: number };
  trafficSources: { [key: string]: number };
  dailyStats: { [key: string]: { visits: number; messages: number } };
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
  ip?: string;
  userAgent?: string;
}

class AnalyticsManager {
  private storageKey = 'kukuladevz_analytics';
  private messagesKey = 'kukuladevz_messages';

  // Inicializar analytics
  initAnalytics(): AnalyticsData {
    const existing = this.getAnalytics();
    if (existing) return existing;

    const initialData: AnalyticsData = {
      visits: 0,
      messages: 0,
      uniqueVisitors: 0,
      lastVisit: new Date().toISOString(),
      pageViews: {},
      trafficSources: {},
      dailyStats: {}
    };

    this.saveAnalytics(initialData);
    return initialData;
  }

  // Obter dados de analytics
  getAnalytics(): AnalyticsData | null {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  // Salvar dados de analytics
  saveAnalytics(data: AnalyticsData): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao salvar analytics:', error);
    }
  }

  // Registrar visita
  trackVisit(page: string = '/', source: string = 'direct'): void {
    const data = this.initAnalytics();
    const today = new Date().toISOString().split('T')[0];
    
    // Incrementar visitas
    data.visits++;
    data.lastVisit = new Date().toISOString();
    
    // Rastrear página
    data.pageViews[page] = (data.pageViews[page] || 0) + 1;
    
    // Rastrear fonte de tráfego
    data.trafficSources[source] = (data.trafficSources[source] || 0) + 1;
    
    // Estatísticas diárias
    if (!data.dailyStats[today]) {
      data.dailyStats[today] = { visits: 0, messages: 0 };
    }
    data.dailyStats[today].visits++;
    
    // Visitantes únicos (simplificado)
    const visitorKey = 'kukuladevz_visitor_id';
    if (!localStorage.getItem(visitorKey)) {
      localStorage.setItem(visitorKey, Date.now().toString());
      data.uniqueVisitors++;
    }
    
    this.saveAnalytics(data);
  }

  // Registrar nova mensagem
  trackMessage(messageData: Omit<ContactMessage, 'id' | 'date' | 'status'>): string {
    const data = this.initAnalytics();
    const today = new Date().toISOString().split('T')[0];
    
    // Incrementar contador de mensagens
    data.messages++;
    
    // Estatísticas diárias
    if (!data.dailyStats[today]) {
      data.dailyStats[today] = { visits: 0, messages: 0 };
    }
    data.dailyStats[today].messages++;
    
    this.saveAnalytics(data);
    
    // Salvar mensagem
    const message: ContactMessage = {
      ...messageData,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      status: 'new',
      ip: this.getClientIP(),
      userAgent: navigator.userAgent
    };
    
    this.saveMessage(message);
    return message.id;
  }

  // Obter mensagens
  getMessages(): ContactMessage[] {
    try {
      const data = localStorage.getItem(this.messagesKey);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // Salvar mensagem
  saveMessage(message: ContactMessage): void {
    try {
      const messages = this.getMessages();
      messages.unshift(message); // Adicionar no início
      localStorage.setItem(this.messagesKey, JSON.stringify(messages));
    } catch (error) {
      console.error('Erro ao salvar mensagem:', error);
    }
  }

  // Atualizar status da mensagem
  updateMessageStatus(messageId: string, status: ContactMessage['status']): void {
    try {
      const messages = this.getMessages();
      const messageIndex = messages.findIndex(m => m.id === messageId);
      if (messageIndex !== -1) {
        messages[messageIndex].status = status;
        localStorage.setItem(this.messagesKey, JSON.stringify(messages));
      }
    } catch (error) {
      console.error('Erro ao atualizar status da mensagem:', error);
    }
  }

  // Obter estatísticas calculadas
  getCalculatedStats(): {
    totalVisits: number;
    totalMessages: number;
    totalUniqueVisitors: number;
    todayVisits: number;
    todayMessages: number;
    thisMonthMessages: number;
    conversionRate: number;
    avgSessionTime: string;
    bounceRate: number;
    topPages: Array<{ page: string; views: number; percentage: number }>;
    topSources: Array<{ source: string; visitors: number; percentage: number }>;
  } {
    const data = this.getAnalytics();
    if (!data) return this.getEmptyStats();

    const today = new Date().toISOString().split('T')[0];
    const thisMonth = new Date().toISOString().substring(0, 7); // YYYY-MM
    
    // Estatísticas do dia
    const todayStats = data.dailyStats[today] || { visits: 0, messages: 0 };
    
    // Mensagens do mês
    const thisMonthMessages = Object.entries(data.dailyStats)
      .filter(([date]) => date.startsWith(thisMonth))
      .reduce((sum, [, stats]) => sum + stats.messages, 0);
    
    // Taxa de conversão (mensagens / visitas * 100)
    const conversionRate = data.visits > 0 ? (data.messages / data.visits) * 100 : 0;
    
    // Páginas mais visitadas
    const totalPageViews = Object.values(data.pageViews).reduce((sum, views) => sum + views, 0);
    const topPages = Object.entries(data.pageViews)
      .map(([page, views]) => ({
        page,
        views,
        percentage: totalPageViews > 0 ? (views / totalPageViews) * 100 : 0
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);
    
    // Fontes de tráfego
    const totalTraffic = Object.values(data.trafficSources).reduce((sum, visitors) => sum + visitors, 0);
    const topSources = Object.entries(data.trafficSources)
      .map(([source, visitors]) => ({
        source: this.formatSourceName(source),
        visitors,
        percentage: totalTraffic > 0 ? (visitors / totalTraffic) * 100 : 0
      }))
      .sort((a, b) => b.visitors - a.visitors)
      .slice(0, 5);

    return {
      totalVisits: data.visits,
      totalMessages: data.messages,
      totalUniqueVisitors: data.uniqueVisitors,
      todayVisits: todayStats.visits,
      todayMessages: todayStats.messages,
      thisMonthMessages,
      conversionRate: Math.round(conversionRate * 100) / 100,
      avgSessionTime: this.calculateAvgSessionTime(),
      bounceRate: this.calculateBounceRate(),
      topPages,
      topSources
    };
  }

  // Estatísticas vazias para inicialização
  private getEmptyStats() {
    return {
      totalVisits: 0,
      totalMessages: 0,
      totalUniqueVisitors: 0,
      todayVisits: 0,
      todayMessages: 0,
      thisMonthMessages: 0,
      conversionRate: 0,
      avgSessionTime: '0m 0s',
      bounceRate: 0,
      topPages: [],
      topSources: []
    };
  }

  // Formatar nome da fonte de tráfego
  private formatSourceName(source: string): string {
    const sourceMap: { [key: string]: string } = {
      'direct': 'Direto',
      'google': 'Google',
      'social': 'Redes Sociais',
      'referral': 'Referências',
      'email': 'Email',
      'search': 'Busca Orgânica'
    };
    return sourceMap[source] || source;
  }

  // Calcular tempo médio de sessão (simulado)
  private calculateAvgSessionTime(): string {
    const data = this.getAnalytics();
    if (!data || data.visits === 0) return '0m 0s';
    
    // Simulação baseada no número de páginas visitadas
    const avgPages = Object.values(data.pageViews).reduce((sum, views) => sum + views, 0) / data.visits;
    const avgMinutes = Math.floor(avgPages * 1.5); // ~1.5 min por página
    const avgSeconds = Math.floor((avgPages * 1.5 - avgMinutes) * 60);
    
    return `${avgMinutes}m ${avgSeconds}s`;
  }

  // Calcular taxa de rejeição (simulado)
  private calculateBounceRate(): number {
    const data = this.getAnalytics();
    if (!data || data.visits === 0) return 0;
    
    // Simulação: assumir que visitas com apenas 1 página são bounces
    const singlePageVisits = data.pageViews['/'] || 0;
    return Math.round((singlePageVisits / data.visits) * 100 * 0.6); // Fator de ajuste
  }

  // Obter IP do cliente (simulado)
  private getClientIP(): string {
    // Em produção, isso viria do servidor
    return '192.168.1.' + Math.floor(Math.random() * 255);
  }

  // Detectar fonte de tráfego
  detectTrafficSource(): string {
    const referrer = document.referrer;
    const url = new URL(window.location.href);
    
    // UTM parameters
    const utmSource = url.searchParams.get('utm_source');
    if (utmSource) return utmSource;
    
    // Referrer analysis
    if (!referrer) return 'direct';
    
    try {
      const referrerDomain = new URL(referrer).hostname;
      
      if (referrerDomain.includes('google')) return 'google';
      if (referrerDomain.includes('facebook') || referrerDomain.includes('instagram') || 
          referrerDomain.includes('twitter') || referrerDomain.includes('linkedin')) return 'social';
      if (referrerDomain !== window.location.hostname) return 'referral';
      
      return 'internal';
    } catch {
      return 'unknown';
    }
  }

  // Limpar dados (para desenvolvimento)
  clearData(): void {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.messagesKey);
    localStorage.removeItem('kukuladevz_visitor_id');
  }
}

// Instância global
export const analytics = new AnalyticsManager();

// Auto-inicializar quando o módulo for carregado
if (typeof window !== 'undefined') {
  analytics.initAnalytics();
  
  // Rastrear visita inicial
  const source = analytics.detectTrafficSource();
  analytics.trackVisit(window.location.pathname, source);
}