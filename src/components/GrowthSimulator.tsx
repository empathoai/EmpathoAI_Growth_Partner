import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, AlertTriangle, Cpu, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';

interface GrowthSimulatorProps {
    onClose: () => void;
}

const MotionDiv = motion.div as any;
const MotionForm = motion.form as any;
const MotionP = motion.p as any;

const GrowthSimulator: React.FC<GrowthSimulatorProps> = ({ onClose }) => {
    const [step, setStep] = useState<'INPUT' | 'DIAGNOSTIC' | 'PROJECTION' | 'SYNCHRONIZE' | 'SUCCESS'>('INPUT');
    const [revenue, setRevenue] = useState<number>(100000);
    const [margin, setMargin] = useState<number>(20);

    // Calculate projections
    const annualRev = revenue * 12;
    const currentProfit = annualRev * (margin / 100);
    const systemicLeakage = annualRev * 0.15; // 15% efficiency gap
    const sovereignPotential = annualRev * 1.4; // 40% growth lift
    const sovereignProfit = sovereignPotential * ((margin + 10) / 100); // 10% margin improvement

    const handleSynchronize = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('SUCCESS');
    };

    return (
        <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
        >
            <div className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary animate-pulse" />
                    <span className="font-helvetica font-light text-gray-mid text-xs uppercase tracking-label">
                        Neural Diagnostic Protocol // v3.1.0
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/5 rounded-full transition-all group"
                >
                    <X className="w-6 h-6 text-white/50 group-hover:text-white" strokeWidth={1} />
                </button>
            </div>

            <div className="w-full max-w-4xl">
                <AnimatePresence mode="wait">
                    {step === 'INPUT' && (
                        <MotionDiv
                            key="input"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                             <div className="space-y-4">
                                <h3 className="font-helvetica font-bold text-5xl md:text-7xl uppercase leading-tight text-white">
                                    Define your <span className="text-gray-mid font-light">Current Density</span>
                                </h3>
                                <p className="font-helvetica font-light text-gray-mid text-xs uppercase tracking-label">Input your operational metrics for systemic analysis.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <label className="font-helvetica font-light text-gray-mid text-[10px] uppercase tracking-label block">Monthly Revenue (USD)</label>
                                    <input
                                        type="range"
                                        min="50000"
                                        max="2000000"
                                        step="10000"
                                        value={revenue}
                                        onChange={(e) => setRevenue(parseInt(e.target.value))}
                                        className="w-full accent-primary bg-white/10 h-1 rounded-none appearance-none cursor-crosshair"
                                    />
                                    <div className="text-4xl font-helvetica font-bold tracking-tight text-white">
                                        ${(revenue / 1000).toFixed(0)}K<span className="text-gray-mid font-light">/MO</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <label className="font-helvetica font-light text-gray-mid text-[10px] uppercase tracking-label block">Net Profit Margin (%)</label>
                                    <input
                                        type="range"
                                        min="5"
                                        max="60"
                                        step="1"
                                        value={margin}
                                        onChange={(e) => setMargin(parseInt(e.target.value))}
                                        className="w-full accent-primary bg-white/10 h-1 rounded-none appearance-none cursor-crosshair"
                                    />
                                    <div className="text-4xl font-helvetica font-bold tracking-tight text-white">
                                        {margin}%<span className="text-gray-mid font-light">MARGIN</span>
                                    </div>
                                </div>
                            </div>

                             <button
                                onClick={() => setStep('DIAGNOSTIC')}
                                className="group flex items-center gap-6 bg-orange text-white px-10 py-6 font-helvetica font-bold uppercase text-sm tracking-label hover:opacity-80 transition-opacity"
                            >
                                Initalize Diagnostic
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </MotionDiv>
                    )}

                    {step === 'DIAGNOSTIC' && (
                        <MotionDiv
                            key="diagnostic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-12 text-center"
                        >
                            <div className="flex justify-center flex-col items-center gap-8">
                                <div className="relative">
                                    <Cpu className="w-24 h-24 text-white animate-pulse" strokeWidth={0.5} />
                                    <MotionDiv
                                        className="absolute inset-0 border border-divider rounded-full"
                                        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    />
                                </div>
                                 <div className="space-y-2">
                                    <h3 className="font-helvetica font-bold text-3xl uppercase text-white">Calculating Systemic Leakage</h3>
                                    <p className="font-helvetica font-light text-gray-mid text-[10px] uppercase tracking-label">Analyzing Infrastructure Efficiency & Decision Quality...</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                                {[
                                    "Validating Revenue Density",
                                    "Identifying Operational Friction",
                                    "Simulating Sovereign Growth Paths"
                                ].map((text, i) => (
                                     <MotionDiv
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.8 }}
                                        onAnimationComplete={() => i === 2 && setTimeout(() => setStep('PROJECTION'), 1000)}
                                        className="p-6 border border-divider bg-white/5 font-helvetica font-light text-gray-mid text-[9px] uppercase tracking-label"
                                    >
                                        {text}
                                    </MotionDiv>
                                ))}
                            </div>
                        </MotionDiv>
                    )}

                    {step === 'PROJECTION' && (
                        <MotionDiv
                            key="projection"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                        >
                            <div className="space-y-8">
                                 <div className="space-y-2">
                                    <h3 className="font-helvetica font-bold text-5xl uppercase leading-tight text-white">
                                        The <span className="text-gray-mid font-light">Leakage</span> Report
                                    </h3>
                                    <p className="font-helvetica font-light text-gray-mid text-xs uppercase tracking-label">Your current trajectory vs. sovereign synchronization.</p>
                                </div>

                                <div className="space-y-6">
                                     <div className="p-8 border-l-2 border-divider bg-white/5 space-y-2">
                                        <div className="flex items-center gap-2 text-red-500 mb-2">
                                            <AlertTriangle className="w-4 h-4" />
                                            <span className="font-helvetica font-bold text-[10px] uppercase tracking-label">Systemic Leakage Identified</span>
                                        </div>
                                        <div className="text-5xl font-helvetica font-bold tracking-tight text-white">
                                            ${(systemicLeakage / 1000).toFixed(0)}K<span className="text-gray-mid font-light">/YR</span>
                                        </div>
                                        <p className="font-helvetica font-regular text-gray-high text-[10px] uppercase leading-relaxed">
                                            Capital lost to sub-optimal infrastructure and weak GTM visibility.
                                        </p>
                                    </div>

                                     <div className="p-8 border-l-2 border-white bg-white/10 space-y-2">
                                        <div className="flex items-center gap-2 text-white mb-2">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="font-helvetica font-bold text-[10px] uppercase tracking-label">Sovereign Growth Potential</span>
                                        </div>
                                        <div className="text-5xl font-helvetica font-bold tracking-tight text-white">
                                            +${((sovereignPotential - annualRev) / 1000000).toFixed(1)}M<span className="text-gray-mid font-light">/YR</span>
                                        </div>
                                        <p className="font-helvetica font-regular text-gray-high text-[10px] uppercase leading-relaxed">
                                            Projected revenue delta following systemic infrastructure replacement.
                                        </p>
                                    </div>
                                </div>

                                 <button
                                    onClick={() => setStep('SYNCHRONIZE')}
                                    className="w-full bg-primary text-black px-10 py-6 font-helvetica font-bold uppercase text-sm tracking-label hover:bg-white transition-all"
                                >
                                    Initiate Synchronization
                                </button>
                            </div>

                            <div className="relative aspect-square border border-divider p-12 flex flex-col justify-end gap-1 overflow-hidden">
                                 <div className="absolute top-8 left-8 space-y-1">
                                    <div className="font-helvetica font-light text-gray-mid text-[10px] uppercase tracking-label opacity-30">Market Noise Curve</div>
                                    <div className="font-helvetica font-light text-white text-[10px] uppercase tracking-label">Sovereign Trajectory</div>
                                </div>

                                {/* Visual Graph Mockup */}
                                <div className="flex items-end gap-2 h-full">
                                    {[40, 45, 42, 50, 48, 55, 52, 60, 58, 75, 70, 95].map((h, i) => (
                                        <MotionDiv
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05, duration: 1 }}
                                            className={`flex-1 ${i > 8 ? 'bg-white' : 'bg-white/10'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </MotionDiv>
                    )}

                    {step === 'SYNCHRONIZE' && (
                        <MotionForm
                            key="synchronize"
                            onSubmit={handleSynchronize}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12 max-w-xl mx-auto"
                        >
                             <div className="text-center space-y-4">
                                <h3 className="font-helvetica font-bold text-5xl uppercase text-white">Lock <span className="text-gray-mid font-light">Protocol</span></h3>
                                <p className="font-helvetica font-light text-gray-mid text-xs uppercase tracking-label text-center">Finalize your diagnostic for institutional review.</p>
                            </div>

                            <div className="space-y-8">
                                 <div className="relative group">
                                    <input
                                        required
                                        type="email"
                                        placeholder="INSTITUTIONAL EMAIL"
                                        className="w-full bg-transparent border-b border-divider py-4 font-helvetica font-regular text-lg focus:outline-none focus:border-primary transition-all uppercase placeholder:text-gray-mid/30 text-white"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
                                </div>

                                 <div className="relative group">
                                    <input
                                        required
                                        type="text"
                                        placeholder="PRIMARY REVENUE BOTTLENECK"
                                        className="w-full bg-transparent border-b border-divider py-4 font-helvetica font-regular text-lg focus:outline-none focus:border-primary transition-all uppercase placeholder:text-gray-mid/30 text-white"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
                                </div>
                            </div>

                             <button
                                type="submit"
                                className="w-full bg-primary text-black px-10 py-6 font-helvetica font-bold uppercase text-sm tracking-label hover:bg-white transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                            >
                                Capture Leakage // Deploy Partner
                            </button>
                        </MotionForm>
                    )}

                    {step === 'SUCCESS' && (
                        <MotionDiv
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-8"
                        >
                            <div className="flex justify-center">
                                <div className="relative">
                                    <CheckCircle2 className="w-24 h-24 text-white" strokeWidth={0.5} />
                                    <MotionDiv
                                        className="absolute inset-0 border border-white/40 rounded-full"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1.2, opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    />
                                </div>
                            </div>

                             <div className="space-y-4">
                                <h3 className="font-helvetica font-bold text-6xl uppercase leading-none text-white">
                                    Synchronization <span className="text-gray-mid font-light">Active</span>
                                </h3>
                                <p className="font-helvetica font-light text-gray-mid text-sm uppercase tracking-label max-w-md mx-auto">
                                    Your diagnostic has been transmitted to our sovereign nodes. Review and outreach scheduled within 120 minutes.
                                </p>
                            </div>

                             <div className="pt-8">
                                <button
                                    onClick={onClose}
                                    className="font-helvetica font-bold text-[10px] uppercase tracking-label border border-divider px-12 py-4 hover:bg-primary hover:text-black transition-all"
                                >
                                    Return to Dashboard
                                </button>
                            </div>
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </div>

            <div className="absolute bottom-12 left-12 hidden md:block">
                 <div className="flex gap-8 group cursor-default">
                    <div className="space-y-1">
                        <div className="font-helvetica font-light text-gray-mid text-[9px] uppercase opacity-50">Target Revenue</div>
                        <div className="font-helvetica font-bold text-[10px] text-white uppercase tracking-label">
                            ${(sovereignPotential / 1000000).toFixed(2)}M
                        </div>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10" />
                    <div className="space-y-1">
                        <div className="font-helvetica font-light text-gray-mid text-[9px] uppercase opacity-50">Profit Expansion</div>
                        <div className="font-helvetica font-bold text-[10px] text-white uppercase tracking-label">
                            +${((sovereignProfit - currentProfit) / 1000).toFixed(0)}K
                        </div>
                    </div>
                </div>
            </div>
        </MotionDiv>
    );
};

export default GrowthSimulator;
