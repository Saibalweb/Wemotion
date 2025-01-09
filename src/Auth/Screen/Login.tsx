import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import FormInput from '../Components/FormInput';

interface FormData {
  emailOrUsername: string;
  password: string;
}

interface FormErrors {
  emailOrUsername?: string;
  password?: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    emailOrUsername: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email/Username validation
    if (!formData.emailOrUsername.trim()) {
      newErrors.emailOrUsername = 'Email or username is required';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form is valid:', formData);
      // Handle login logic here
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-2">
        <TouchableOpacity>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-base">Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="flex-1 px-4 pt-6">
        <Text className="text-white text-4xl font-bold mb-2">Login</Text>
        <Text className="text-gray-400 text-base mb-8">
          Log in to join the conversation and connect with your community
        </Text>

        {/* Form */}
        <View className="space-y-4">
          <FormInput
            label="Email or username"
            value={formData.emailOrUsername}
            onChangeText={(text) => {
              setFormData({ ...formData, emailOrUsername: text });
              if (errors.emailOrUsername) {
                setErrors({ ...errors, emailOrUsername: undefined });
              }
            }}
            error={errors.emailOrUsername}
            autoCapitalize="none"
            autoComplete="email"
          />

          <FormInput
            label="Password"
            value={formData.password}
            onChangeText={(text) => {
              setFormData({ ...formData, password: text });
              if (errors.password) {
                setErrors({ ...errors, password: undefined });
              }
            }}
            error={errors.password}
            secureTextEntry={!showPassword}
            showPasswordToggle
            showPassword={showPassword}
            onPasswordToggle={() => setShowPassword(!showPassword)}
          />

          <TouchableOpacity className="self-end">
            <Text className="text-white text-sm underline">
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <View className="mt-8">
          <TouchableOpacity 
            className="bg-purple-500 rounded-lg py-4"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

