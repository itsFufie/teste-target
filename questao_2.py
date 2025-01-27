import sys




def main():
    target = 8

    sequence = [0, 1]
        
    def calculate_next():
        sequence_index = len(sequence)
        sequence.append(sequence[sequence_index - 1] + sequence[sequence_index - 2])



    while target >= sequence[len(sequence) - 1]:
        calculate_next()
        if target in sequence:
            print("Numero pertence a sequencia de fibonacci")
            return

    print("Numero nao pertence a sequencia de fibonacci")
    return


if __name__ == "__main__":
    main()