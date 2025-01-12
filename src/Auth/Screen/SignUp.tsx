import { useState } from 'react';
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
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
}

export default function SignUp()  {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form is valid:', formData);
      // Handle sign up logic here
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
          <Text className="text-white text-base">Login</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="px-4 pt-6">
        <Text className="text-white text-4xl font-bold mb-2">Sign up</Text>
        <Text className="text-gray-400 text-base mb-8">
          Log in to join the conversation and connect with your community
        </Text>

        {/* Form */}
        <View>
          {/* Name Row */}
          <View className="flex-row space-x-4">
            <View className="flex-1">
              <FormInput
                label="First name"
                value={formData.firstName}
                onChangeText={(text) => {
                  setFormData({ ...formData, firstName: text });
                  if (errors.firstName) {
                    setErrors({ ...errors, firstName: undefined });
                  }
                }}
                error={errors.firstName}
              />
            </View>
            <View className="flex-1">
              <FormInput
                label="Last name"
                value={formData.lastName}
                onChangeText={(text) => {
                  setFormData({ ...formData, lastName: text });
                  if (errors.lastName) {
                    setErrors({ ...errors, lastName: undefined });
                  }
                }}
                error={errors.lastName}
              />
            </View>
          </View>

          <FormInput
            label="Username"
            value={formData.username}
            onChangeText={(text) => {
              setFormData({ ...formData, username: text });
              if (errors.username) {
                setErrors({ ...errors, username: undefined });
              }
            }}
            error={errors.username}
            autoCapitalize="none"
          />

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
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
          className="bg-purple-500 rounded-lg py-4 mt-8"
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

