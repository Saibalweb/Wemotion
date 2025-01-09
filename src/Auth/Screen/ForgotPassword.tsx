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
  email: string;
}

interface FormErrors {
  email?: string;
}

export default function ForgotPassword() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form is valid:', formData);
      // Handle password reset logic here
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-2">
        <TouchableOpacity>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="px-6 pt-6 flex-1">
        <View>
            <Text className="text-white text-3xl font-bold mb-2">
            Forgot Your Password?
            </Text>
            <Text className="text-gray-400 text-base mb-8">
            No worries, enter your email and we'll send you instructions to reset it
            </Text>

            {/* Form */}
            <View>
            <FormInput
                label="Email"
                value={formData.email}
                onChangeText={(text) => {
                setFormData({ ...formData, email: text });
                if (errors.email) {
                    setErrors({ ...errors, email: undefined });
                }
                }}
                error={errors.email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                textContentType="emailAddress"
            />
            </View>
        </View>
        {/* Continue Button */}
        <TouchableOpacity 
          className="bg-purple-500 rounded-lg py-4 mt-auto mb-10"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

