export default function getReadableTimestamp (timestamp: number): string {
  return new Date(timestamp).toUTCString()
}