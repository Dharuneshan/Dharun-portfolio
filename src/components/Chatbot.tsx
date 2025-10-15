import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm here to help you learn more about Dharuneshan's portfolio. Ask me anything about his experience, projects, or skills!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Here you would integrate with Lovable AI
      // For now, we'll use a simple mock response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = getMockResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I apologize, but I encountered an error. Please try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getMockResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("experience") || lowerQuestion.includes("work")) {
      return "Dharuneshan has worked as an AI & Product Developer at CHHAAI AI Solutions and is currently the Co-Founder & CTO at 15 Bucks startup. He has experience in Django, Flutter, AI/ML implementation, and full-stack development.";
    }
    
    if (lowerQuestion.includes("skill") || lowerQuestion.includes("technology")) {
      return "Dharuneshan is proficient in Django, Flutter, AWS, PostgreSQL, NLP, LLM, Machine Learning, and various web technologies including React and Tailwind CSS. He also has expertise in Android app development and cloud services.";
    }
    
    if (lowerQuestion.includes("project")) {
      return "Key projects include Lattice (a chatbot-driven platform for startups), 15-Jobs (a Flutter mobile job portal), and the Ramanuj Website (a full-stack corporate solution). Each project demonstrates his expertise in AI, full-stack development, and user-centric design.";
    }
    
    if (lowerQuestion.includes("education") || lowerQuestion.includes("study")) {
      return "Dharuneshan holds a B.TECH degree in Artificial Intelligence & Data Science from J.N.N Institute of Engineering with a CGPA of 7.8. He is also AWS Cloud Practitioner certified.";
    }
    
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("reach") || lowerQuestion.includes("email")) {
      return "You can reach Dharuneshan at sdharuneshan03@gmail.com or call him at +91 6374512370. He's also active on LinkedIn and GitHub!";
    }
    
    return "That's an interesting question! Feel free to ask me about Dharuneshan's experience, skills, projects, education, or how to contact him. I'm here to help!";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 glow-effect shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] card-elevated rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-background/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">Portfolio Assistant</h3>
                  <p className="text-xs text-primary-foreground/80">Ask me anything!</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-background/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "glass-morphism"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="glass-morphism rounded-2xl px-4 py-2">
                      <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about experience, skills..."
                  className="flex-1 bg-secondary/50"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  size="sm"
                  disabled={!input.trim() || isLoading}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
