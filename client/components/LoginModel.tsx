"use client";
import { selectForm } from "@/lib/features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { useAdminLoginMutation } from "@/lib/features/questionsApiSlice";
import { FormEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react"; 
import { openLoginForm, setCredential } from "@/lib/features/adminSlice";

const LoginModel = () => {
  const isFormOpen = useSelector(selectForm);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [adminLogin, { isLoading, data, error }] = useAdminLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      if (email && password) {
        const response = await adminLogin({ email, password }).unwrap();
        console.log("Login Successful:", response);
        dispatch(openLoginForm());
        dispatch(setCredential());
      }
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  const handleClose = () => {
    dispatch(openLoginForm());
  };

  if (isFormOpen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <Card className="mx-auto max-w-sm relative">
          <button onClick={handleClose} className="absolute top-4 right-6">
            <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>For Getting Access to the dashboard, please login</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" ref={emailRef} required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required ref={passwordRef} placeholder="Enter your password" />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default LoginModel;
