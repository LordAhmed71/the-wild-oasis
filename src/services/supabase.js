import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tfkkdjoloqlcaitmzbhi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRma2tkam9sb3FsY2FpdG16YmhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwNDQ2MDAsImV4cCI6MjAxMjYyMDYwMH0.MO_CjRag6YT4opUQ2ifq1S0JNf3ospcYBuHS3scpwTw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
