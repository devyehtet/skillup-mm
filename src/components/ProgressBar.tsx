interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="progress-track h-2.5 overflow-hidden rounded-full">
      <div className="progress-fill h-full rounded-full" style={{ width: `${value}%` }} />
    </div>
  );
}
