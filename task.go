func countRepeatedWords(words []string) map[string]int {
	counts := make(map[string]int)
	for _, word := range words {
			counts[word]++
	}
	return counts
}
words := []string{"apple", "banana", "orange", "apple", "banana", "banana"}
wordCounts := countRepeatedWords(words)
fmt.Println(wordCounts) // map[apple:2 banana:3 orange:1]
