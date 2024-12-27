
import { useState } from 'react'
import './App.css'
import { RegisterForm } from './components/register/RegisterForm'
import { SummaryForm } from './components/summary/SummaryForm'
import { TopicsForm } from './components/topics/TopicsForm'
import { FormDataModel } from './interfaces/interfaces'
import { Toaster } from 'react-hot-toast'

function RegisterApp() {

  const initialFormData: FormDataModel = {
    name: '',
    email: '',
    topics: [],
  };

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataModel>(initialFormData);

  const handleFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedData = { ...formData, [name]: value }

    setFormData(updatedData)
    return updatedData
  }
  
  const handleOptions = (options: string) => {

    if (formData.topics.includes(options)) {
      const updatedTopics = formData.topics.filter((topic) => topic !== options);
      setFormData({ ...formData, topics: updatedTopics });
      return;
    }
    
    const updatedTopics = [...formData.topics, options];
    setFormData({ ...formData, topics: updatedTopics });

  }

  const handleNextStep = (prev: number) => {
    setCurrentStep(Math.min(prev, 3));
  };

  const resetFormData = () => {
    setFormData({
        name: '',
        email: '',
        topics: [],
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <RegisterForm onNextStep={ (step) => handleNextStep(step)} onHandleFormData={ handleFormData } formData={ formData } />;
      case 2:
        return <TopicsForm onNextStep={ (step) => handleNextStep(step) } onHandleFormData={ handleOptions } formData={ formData } />;
      case 3:
        return <SummaryForm formData={ formData } onBack={ (step) => handleNextStep(step) } resetFormData={ resetFormData } />;
      default:
        return null;
    }
  };

  return <>
    <Toaster />
    {
      renderStep()
    }
  </>;
}

export default RegisterApp
