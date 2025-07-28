export interface FAQ {
  id: number;          
  question: string;     
  answer: string;       
  category?: string;    
  isExpanded?: boolean; 
  lastUpdated?: Date;   
}