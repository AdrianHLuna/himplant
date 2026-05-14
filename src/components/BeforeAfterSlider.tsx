'use client';

import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

interface BeforeAfterSliderProps {
    before: string;
    after: string;
    className?: string;
}

export function BeforeAfterSlider({ before, after, className }: BeforeAfterSliderProps) {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(pos);
    }, []);

    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        handleMove(e.clientX);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation();
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
    };

    const handleEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    React.useEffect(() => {
        if (!isDragging) return;

        const onMouseMove = (e: MouseEvent) => {
            handleMove(e.clientX);
        };

        const onTouchMove = (e: TouchEvent) => {
            handleMove(e.touches[0].clientX);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, handleMove, handleEnd]);

    return (
        <div 
            ref={containerRef}
            className={cn(
                "relative w-full aspect-square md:aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl cursor-ew-resize select-none group transition-all duration-500",
                className
            )}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
        >
            {/* After Image (Background) */}
            <img 
                src={after} 
                alt="Después" 
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                draggable={false}
            />

            {/* Before Image (Overlay with Clip Path) */}
            <div 
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
                <img 
                    src={before} 
                    alt="Antes" 
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    draggable={false}
                />
            </div>

            {/* Comparison Labels (Antes/Después) */}
            <div className="absolute top-6 inset-x-6 flex justify-between pointer-events-none z-30">
                <span className="px-4 py-2 bg-black/60 backdrop-blur-xl text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full border border-white/10 shadow-xl">
                    ANTES
                </span>
                <span className="px-4 py-2 bg-blue-600/60 backdrop-blur-xl text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full border border-white/10 shadow-xl">
                    DESPUÉS
                </span>
            </div>

            {/* Slider Handle */}
            <div 
                className="absolute inset-y-0 w-[2px] bg-white/50 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 bg-white rounded-full shadow-[0_0_40px_rgba(0,0,0,0.3)] flex items-center justify-center border-4 border-zinc-900/50 backdrop-blur-md transition-transform duration-300">
                    <MoveHorizontal className="h-6 w-6 text-zinc-900" />
                </div>
            </div>
            
            {/* Hint overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-white/70 font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                DESLIZA PARA COMPARAR
            </div>
        </div>
    );
}
