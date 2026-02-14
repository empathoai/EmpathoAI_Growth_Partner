
import { useState, useEffect, useCallback } from 'react';
import Vapi from '@vapi-ai/web';

const PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [callStatus, setCallStatus] = useState<'idle' | 'loading' | 'active' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const vapiInstance = new Vapi(PUBLIC_KEY);

    vapiInstance.on('call-start', () => {
      setCallStatus('active');
    });

    vapiInstance.on('call-end', () => {
      setCallStatus('idle');
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi Error:', error);
      setCallStatus('error');
      setErrorMessage('[FATAL_ERROR] // PROTOCOL_FAILURE');
    });

    setVapi(vapiInstance);

    return () => {
      vapiInstance.stop();
    };
  }, []);

  const startCall = useCallback(async () => {
    if (!vapi) return;

    setCallStatus('loading');
    setErrorMessage(null);

    try {
      await vapi.start(ASSISTANT_ID);
    } catch (err: any) {
      if (err?.message?.includes('Permission') || err?.name === 'NotAllowedError') {
        setCallStatus('error');
        setErrorMessage('[PERMISSION_DENIED] // MIC_REQUIRED');
      } else {
        setCallStatus('error');
        setErrorMessage('[CONNECTION_FAILED] // AUTH_TIMEOUT');
      }
    }
  }, [vapi]);

  const stopCall = useCallback(() => {
    if (vapi) {
      vapi.stop();
      setCallStatus('idle');
    }
  }, [vapi]);

  return {
    startCall,
    stopCall,
    callStatus,
    errorMessage
  };
};
