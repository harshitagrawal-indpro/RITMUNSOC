
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "",
    userType: "attendee" 
  });

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", loginData);
    // TODO: Implement actual authentication
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", registerData);
    // TODO: Implement actual registration
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-md mx-4 munsoc-glass border-munsoc-teal-500/20 animate-scale-in">
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="sm" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ✕
          </Button>
        </div>
        
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl munsoc-text-gradient">Welcome to MUNSOC RIT</CardTitle>
          <CardDescription>Join our diplomatic community</CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="transition-all duration-300">Login</TabsTrigger>
              <TabsTrigger value="register" className="transition-all duration-300">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4 animate-fade-in">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 transition-all duration-300 transform hover:scale-105"
                >
                  Login
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register" className="space-y-4 animate-fade-in">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Full Name</Label>
                  <Input
                    id="register-name"
                    placeholder="John Doe"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="your@email.com"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-type">Account Type</Label>
                  <select
                    id="user-type"
                    value={registerData.userType}
                    onChange={(e) => setRegisterData({ ...registerData, userType: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md bg-background transition-all duration-300 focus:scale-105"
                  >
                    <option value="attendee">Attendee</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 transition-all duration-300 transform hover:scale-105"
                >
                  Register
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
